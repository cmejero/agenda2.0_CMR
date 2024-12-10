import { Injectable } from '@angular/core';
import { Contacto } from '../modelos/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  push(contacto: Contacto) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  private contacto: Contacto[]= [];
}
