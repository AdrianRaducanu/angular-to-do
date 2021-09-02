import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { HttpServiceService } from '../data/http-service.service';
import { Task } from '../data/interfata';

@Component({
  selector: 'app-all-to-do',
  templateUrl: './all-to-do.component.html',
  styleUrls: ['./all-to-do.component.css'],
})
export class AllToDoComponent implements OnInit {
  //______________________
  //variabile
  //______________________

  //-> copie ce urmeaza a fi filtrata in functie de taskurile cautate
  allTasks: Task[] = this.taskuri.taskArray;

  //->constructor cu serviceul injectat
  constructor(
    private taskuri: DataServiceService,
    private dataApi: HttpServiceService
  ) {}

  //______________________
  //metode
  //______________________
  //->
  ngOnInit(): void {
    this.dataApi.getDataFromApi().subscribe({
      next: (wtfDeborah) => {
        console.log(wtfDeborah);
        this.taskuri.setTasks(wtfDeborah);
        this.allTasks = this.taskuri.taskArray;
      },
      error: (err) => console.log(err),
    });
  }

  //->
  showTask() {}

  //->functie de primire a taskurilor filtrate
  reciveFilterTask($event) {
    this.allTasks = $event;
  }

  //->functie de revenire la toate taskurile odata cu stergerea tutuoror celor cautate
  reciveEmptySearch($event) {
    this.allTasks = $event;
  }
}
