import { Component } from '@angular/core';
import { DataServiceService } from './main-components/data/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do';

  constructor(private taskuri: DataServiceService) {}

  showArray() {
    console.log(this.taskuri.taskArray);
  }
}
