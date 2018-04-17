import { InfomationService } from './../../services/infomation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _is: InfomationService) { }

  ngOnInit() {
  }

}
