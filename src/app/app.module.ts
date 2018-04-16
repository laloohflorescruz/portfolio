import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortafolioComponent } from './component/portafolio/portafolio.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
