import { Component, inject, Input } from '@angular/core';
import { Contacto } from '../modelos/contacto';
import { HttpService } from '../servicios/http.service';

@Component({
    selector: 'app-ficha-contactos',
    imports: [],
    templateUrl: './ficha-contactos.component.html',
    styleUrl: './ficha-contactos.component.css',
    standalone: true
})
export class FichaContactosComponent {

@Input() contacto!: Contacto;



}
