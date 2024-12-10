
import { Component, inject, Input, OnInit } from '@angular/core';
import { Contacto } from '../modelos/contacto';
import { FichaContactosComponent } from "../ficha-contactos/ficha-contactos.component";
import { NgFor } from '@angular/common';
import { HttpService } from '../servicios/http.service';

@Component({
    selector: 'app-contactos',
    imports: [FichaContactosComponent, NgFor],
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css',
    standalone: true
})
export class ContactosComponent implements OnInit {

contactosPadre : Contacto[] = []


httpService: HttpService = inject(HttpService);


  getContacto(){

    this.httpService.getContacto()
      .subscribe(resp =>{

        this.contactosPadre = resp;
      } );

  }

ngOnInit(): void {
this.getContacto()
}

}


