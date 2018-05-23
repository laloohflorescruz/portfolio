import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AboutComponent,
  PortafolioComponent,
  ContactComponent,
  ProductsComponent,

 } from './component/index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
