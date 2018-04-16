import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfomationService {

  info: any = {};
  loaded: false;

  constructor( public http: Http ) {

    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
      console.log(data.json());
      this.loaded = false;
      this.info = data.json();
    });
   }
}
