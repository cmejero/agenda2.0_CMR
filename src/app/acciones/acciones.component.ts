import { Component, inject } from '@angular/core';
import { ContactosService } from '../servicios/contactos.service';
import { Contacto } from '../modelos/contacto';
import { HttpClient } from '@angular/common/http';
import { AgregarContactoComponent } from "../agregar-contacto/agregar-contacto.component";
import { NgIf } from '@angular/common';
import { HttpService } from '../servicios/http.service';
import { BuscarComponent } from "../buscar/buscar.component";


@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [AgregarContactoComponent, NgIf, BuscarComponent],
  templateUrl: './acciones.component.html',
  styleUrl: './acciones.component.css'
})
export class AccionesComponent {
  contactoSrv = inject(ContactosService);  // Servicio de contactos
  httpService: HttpService = inject(HttpService);  // Servicio HTTP
  contactos: Contacto[] = [];  // Lista de contactos
  contactoEncontrado: Contacto | null = null;  // Contacto encontrado

  componenteActivo: string = '';  // Estado inicial (ningún componente visible)

  // Cambia el componente activo para mostrar u ocultar
  toggleAction(componente: string) {
    this.componenteActivo = componente;  // Actualiza el componente activo
  }

  // Agrega un nuevo contacto llamando al servicio HTTP
  agregarContacto(nuevoContacto: Contacto) {
    this.httpService.guardarContacto(nuevoContacto).subscribe(
      (contactoGuardado) => {
        this.contactos.push(contactoGuardado);  // Añade el contacto a la lista
        console.log('Contacto agregado al servidor:', contactoGuardado);  // Verifica en consola
      },
      (error) => {
        console.error('Error al agregar contacto:', error);  // Manejo de errores
      }
    );
  }

  // Busca un contacto por su "nick"
  buscarContacto(nick: string) {
    if (nick.trim() === '') {  // Validación para nick vacío
      console.log('Por favor, ingrese un nick válido');
      return;
    }

    // Realiza la búsqueda del contacto por nick
    this.httpService.buscarContactoPorNick(nick).subscribe(
      (contacto) => {
        if (contacto) {
          this.contactoEncontrado = contacto;  // Si se encuentra, asigna el contacto
          console.log('Contacto encontrado:', contacto);  // Verifica en consola
        } else {
          console.log('No se encontró un contacto con ese nick.');  // No se encontró el contacto
          this.contactoEncontrado = null;
        }
      },
      (error) => {
        console.error('Error al buscar el contacto:', error);  // Manejo de errores
      }
    );
  }
}


