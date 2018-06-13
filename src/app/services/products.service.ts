import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import { reject } from 'q';

@Injectable()
export class MegaSuperService {
   constructor(private _jsonp: Jsonp) {}
}

@Injectable()
export class ProductsService {

  products: any[] = [];
  products_filter: any[] = [];

  loading_products: boolean = true;

  constructor( private http: Http ) {
    this.load_products();
  }

  public load_product(cod: string) {
    return this.http.get(`https://portfolio-5b914.firebaseio.com/Products/${cod}.json`);
  }

  public search_product (termino: string ) {
    if (this.products.length === 0) {
      this.load_products().then( () => {
        this.filtred_products(termino);
      });
      else {
        this.filtred_products(termino);
      }
    }
  }


  private filtred_products(termino: string) {
    this.products_filter = [];

    termino = termino.toLowerCase();
    this.products.forEach( prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase.indexOf(termino) >= 0 ) {
        this.filtred_products.push( prod );
      }
    });
  }

  public load_products () {
    this.loading_products = true;
    let prom = new Promise (( resolve, reject ) => {
      this.http.get('https://portfolio-5b914.firebaseio.com/Products_Idx.json')
      .subscribe( res => {
          this.loading_products = false;
          this.products = res.json();
          resolve();
      });
    });
    return prom;
  }
}
