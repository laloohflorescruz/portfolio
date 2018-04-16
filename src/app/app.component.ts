import { Component } from '@angular/core';
import { InfomationService } from './services/infomation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( public _is: InfomationService) {

  }
}
