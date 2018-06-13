import { RouterModule, Router } from '@angular/router';
import { InfomationService } from './../../services/infomation.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _is: InfomationService, private router:Router) { }

  buscar_producto(termino: string) {
    this.router.navigate( ['buscar', termino] );
  }
  ngOnInit() {
  }
}
