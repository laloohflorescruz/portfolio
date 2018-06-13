import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  termino: string = undefined;

  constructor( private route: ActivatedRoute, private _ps: ProductsService) {

    route.params.subscribe(parameters => {
      this.termino  = parameters['termino'];

      //console.log(this.termino);
      _ps.search_product(this.termino);
    });
  }
}
