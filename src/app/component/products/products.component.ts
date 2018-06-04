import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

product: any = undefined;

  constructor(private route: ActivatedRoute, private _ps: ProductsService) {
    route.params.subscribe(parameters => {
    _ps.load_product(parameters ['id']).subscribe(res => {
      this.product = res.json();
      console.log(this.product);
      });
   });
  }
}
