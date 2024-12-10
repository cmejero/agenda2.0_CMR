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
  contactoSrv = inject(ContactosService);
  httpService: HttpService = inject(HttpService);
  contactos: Contacto[] = [];
  contactoEncontrado: Contacto | null = null;

  componenteActivo: string = ''; // Estado inicial (ningún componente visible)

  toggleAction(componente: string) {
    this.componenteActivo = componente; // Cambia el componente activo
  }


  agregarContacto(nuevoContacto: Contacto) {
    // Llamamos al servicio para agregar el contacto al servidor
    this.httpService.guardarContacto(nuevoContacto).subscribe(
      (contactoGuardado) => {
        // Cuando la respuesta es exitosa, agregar el contacto a la lista
        this.contactos.push(contactoGuardado);
        console.log('Contacto agregado al servidor:', contactoGuardado); // Verifica en consola
      },
      (error) => {
        // Manejo de errores en caso de que la solicitud falle
        console.error('Error al agregar contacto:', error);
      }
    );
  }

   // Método para manejar la búsqueda de un contacto por nick
   buscarContacto(nick: string) {
    if (nick.trim() === '') {
      console.log('Por favor, ingrese un nick válido');
      return;
    }

    // Llamamos al servicio para buscar el contacto por nick
    this.httpService.buscarContactoPorNick(nick).subscribe(
      (contacto) => {
        if (contacto) {
          this.contactoEncontrado = contacto;
          console.log('Contacto encontrado:', contacto); // Verifica el contacto encontrado
        } else {
          console.log('No se encontró un contacto con ese nick.');
          this.contactoEncontrado = null;
        }
      },
      (error) => {
        console.error('Error al buscar el contacto:', error);
      }
    );
  }


}
