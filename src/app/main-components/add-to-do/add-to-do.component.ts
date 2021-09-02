import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../data/data-service.service';
import { HttpServiceService } from '../data/http-service.service';
import { Task } from '../data/interfata';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  //______________________
  //variabile
  //______________________

  //->conditie popup
  conditiePopup: boolean = false;

  //->input pt adaugare de task, by defult fiind unchecked
  textInput: Task = {
    id: '',
    name: '',
    checked: false,
  };

  //->protejeaza impotriva introducerii eronate
  ok: boolean = true;

  //->constructor in care se injecteaza serviciul
  constructor(
    private taskuri: DataServiceService,
    private dataApi: HttpServiceService
  ) {}

  //______________________
  //metode
  //______________________
  //->
  ngOnInit(): void {}

  //->metoda pt butonul de adaugare
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.textInput.id = (
        Number(this.taskuri.taskArray[this.taskuri.taskArray.length - 1].id) + 1
      ).toString();
      //creez noul id
      this.dataApi.postData(this.textInput).subscribe(
        (result) => console.log('success: ', result),
        (error) => console.log('error ', error)
      );
      //pun in api
      this.taskuri.addTask(this.textInput);
      //pun in vectorul principal
      this.textInput.name = '';
      this.ok = true;
      //->post in api
    } else {
      this.ok = false;
      this.conditiePopup = true;
    }
  }

  //->inchidere popul de la copil
  exitPopup($event) {
    this.conditiePopup = $event;
  }
}
