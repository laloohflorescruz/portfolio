import { InfomationService } from './../../services/infomation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _is:InfomationService ) { }

  ngOnInit() {
  }

}
