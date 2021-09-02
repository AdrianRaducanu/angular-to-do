import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shadow-pop-up',
  templateUrl: './shadow-pop-up.component.html',
  styleUrls: ['./shadow-pop-up.component.css'],
})
export class ShadowPopUpComponent implements OnInit {
  //______________________
  //variabile
  //______________________

  //->text pt popup
  @Input() popupText: string;

  //->conditie de afisare a popupului
  @Input() conditiePopup: boolean;

  //->inchiderePopup
  @Output() closePopup = new EventEmitter<boolean>();

  //->constructor
  constructor() {}

  //______________________
  //metode
  //______________________

  ngOnInit(): void {}

  //->metoda pt submit
  onPress(): void {
    console.log(this.conditiePopup);
    this.closePopup.emit(false);
  }
}
