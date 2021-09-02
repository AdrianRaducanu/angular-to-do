import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { HttpServiceService } from '../data/http-service.service';
import { Task } from '../data/interfata';

@Component({
  selector: 'app-one-to-do',
  templateUrl: './one-to-do.component.html',
  styleUrls: ['./one-to-do.component.css'],
})
export class OneToDoComponent implements OnInit {
  //______________________
  //variabile
  //______________________

  //->input pt taskul curent
  @Input() task: Task;

  //->input pt toate taskurile
  @Input() allTasks: Task[];

  //->output pt container atunci cand se sterg taskurile cautate
  @Output() emptyTask = new EventEmitter<Task[]>();

  //->construcotr cu serviciul injectat
  constructor(
    private taskuri: DataServiceService,
    private dataApi: HttpServiceService
  ) {}

  //______________________
  //metode
  //______________________

  //->
  ngOnInit(): void {}

  //->stergerea taskului curent
  //trebuie sters atat din vectorul din serviciu, cat si din copia din container, pt a updata vizual continutul
  deleteTask() {
    console.log('indexul ', this.allTasks.indexOf(this.task));

    this.dataApi.deleteData(this.task).subscribe(
      (result) => console.log('succes ', result),
      (err) => console.log('error ', err)
    );
    this.allTasks.splice(this.allTasks.indexOf(this.task), 1); //->sterg din copie

    this.taskuri.deleteTask(this.task); //->sterg din serviciu

    //odata ce se sterg toate taskurile ce indeplinesc conditiile de cautare, se revine automat la toate
    if (this.allTasks.length === 0) {
      this.allTasks = this.taskuri.taskArray;
      this.emptyTask.emit(this.allTasks);
    }
  }

  //->metoda pt check/uncheck
  changeCheck() {
    //this.taskuri.checkTask(this.task);
    this.allTasks[this.allTasks.indexOf(this.task)].checked =
      !this.allTasks[this.allTasks.indexOf(this.task)].checked;

    this.dataApi.updateData(this.task).subscribe(
      (result) => console.log('succes ', result),
      (error) => console.log('error ', error)
    );
    //console.log(this.task);
  }
}
