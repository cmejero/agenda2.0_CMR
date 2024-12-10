import { Routes } from '@angular/router';
import { AccionesComponent } from './acciones/acciones.component';
import { ContactosComponent } from './contactos/contactos.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [

  {path:'post', component:AppComponent},
  {path: 'menu-acciones', component: AccionesComponent},
  {path: 'lista-contacto', component: ContactosComponent},
  {path: '', redirectTo: 'menu-acciones', pathMatch:'full'}
];

