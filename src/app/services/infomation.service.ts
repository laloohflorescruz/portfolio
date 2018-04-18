import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfomationService {

  info: any = {};
  loaded: false;
  loaded_about: true;
  team: any = {};

  constructor( public http: Http ) {
    this.data_info();
    this.data_about_us();
  }

   public data_info() {
    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
      console.log(data.json());
      this.loaded = false;
      this.info = data.json();
    });
   }


   public data_about_us() {
    this.http.get('https://portfolio-5b914.firebaseio.com/Team.json')
    .subscribe( data => {
      //console.log(data.json());
      this.loaded_about = true;
      this.team = data.json();
    });
   }

}
