import { InfomationService } from './../../services/infomation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number = new Date().getFullYear();

  constructor(public _is: InfomationService) { }

  ngOnInit() {
  }

}
