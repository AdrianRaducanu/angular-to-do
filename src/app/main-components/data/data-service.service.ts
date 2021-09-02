import { Injectable } from "@angular/core";
import { Task } from "./interfata";
@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  //variabile
  //__________
  //aux: number = 0;

  taskArray: Task[] = [];

  index: number;

  //constructor
  //__________
  constructor() {}

  //metode
  //___________
  addTask(task: Task): void {
    //this.aux = Number(this.taskArray[this.taskArray.length - 1].id) + 1;
    //task.id = this.aux.toString();
    this.taskArray.push(Object.assign({}, task));
  }
  getTasks() {
    return this.taskArray;
  }
  setTasks(tasks: Task[]): void {
    this.taskArray = [...tasks];
  }

  //->aparent aici e ceva dubios
  deleteTask(task: Task): void {
    this.index = this.taskArray.indexOf(task);
    if (this.index !== -1) {
      this.taskArray.splice(this.index, 1);
    } else {
      console.log("bullshit");
    }
  }
  checkTask(task: Task): void {
    //console.log(task);
    this.index = this.taskArray.indexOf(task);
    console.log(this.taskArray);
    console.log(task);
    console.log(this.index);
    this.taskArray[this.index].checked = !this.taskArray[this.index].checked;
  }
}
