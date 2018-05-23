import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( private _ps: ProductsService ) { }

  ngOnInit() {
  }
}
