import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AboutComponent,
  PortafolioComponent,
  ContactComponent
 } from './component/index.paginas';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo:' '},
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
