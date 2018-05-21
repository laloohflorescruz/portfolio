import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class MegaSuperService {
   constructor(private _jsonp: Jsonp) {}
}

@Injectable()
export class ProductsService {
  products: any[] = [];
  loading_products: true;
  constructor( private http: Http ) {
    this.load_products();
  }


  public load_products () {
    this.loading_products = true;

    if (this.products.length === 0 ) {
      this.http.get('https://portfolio-5b914.firebaseio.com/Products_Idx.json')
      .subscribe( res => {
        this.loading_products = true;
        this.load_products = res.json();
      });
    }
  }
}
