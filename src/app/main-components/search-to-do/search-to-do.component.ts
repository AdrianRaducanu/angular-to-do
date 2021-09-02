import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { Task } from '../data/interfata';

@Component({
  selector: 'app-search-to-do',
  templateUrl: './search-to-do.component.html',
  styleUrls: ['./search-to-do.component.css'],
})
export class SearchToDoComponent implements OnInit {
  //______________________
  //variabile
  //______________________

  //->conditie popup
  conditiePopup: boolean = false;
  //->text popup
  textPopup: string = '';

  //->input pt copia dupa taskuri
  @Input() allTasks;

  //->textul cautat
  textSearch: string = '';

  //->output pt componenta parinte container
  @Output() filterTask = new EventEmitter<Task[]>();

  //->constructor cu serviciu injectat
  constructor(private taskuri: DataServiceService) {}

  //______________________
  //metode
  //______________________

  //->
  ngOnInit(): void {}

  //->metoda pt apasarea butonului de cautare
  //trimit informatie la componenta parinte pt a modifica vectorul copie cu taskuri
  onSearch(): void {
    if (this.textSearch !== '') {
      this.allTasks = this.allTasks.filter((x) =>
        x.name.includes(this.textSearch)
      );
      console.log(this.allTasks.length);
      if (this.allTasks.length === 0) {
        this.textPopup = 'No task contains this text. Return to the whole list';
        this.conditiePopup = true;
        this.allTasks = this.taskuri.taskArray;
        this.textSearch = '';
      }
      this.filterTask.emit(this.allTasks);
    } else {
      this.textPopup = 'Invalid Search';
      this.conditiePopup = true;
    }
  }

  //->metoda pt afisarea vectorului principal cu taskuri
  //trimit trigger catre parinte
  onReset(): void {
    this.textSearch = '';
    this.allTasks = this.taskuri.taskArray;
    this.filterTask.emit(this.allTasks);
  }

  //->inchidere popul de la copil
  exitPopup($event) {
    this.conditiePopup = $event;
  }
}
