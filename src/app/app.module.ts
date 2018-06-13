import {JsonpModule} from '@angular/http';
import { ProductsService } from './services/products.service';
import { InfomationService } from './services/infomation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule } from '@angular/http';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortafolioComponent } from './component/portafolio/portafolio.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';
import { SearchComponent } from './component/search/search.component';



@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InfomationService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
