import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../modelos/contacto';
import { HttpService } from '../servicios/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  nick: string = '';  // Variable para almacenar el nick introducido
  contactoEncontrado: Contacto | null = null;

  @Output() buscarContacto = new EventEmitter<string>();  // Emitir el nick al componente padre
  constructor(private httpService: HttpService) {}

  busquedaContacto(): void {
    if (this.nick.trim()) {
      this.httpService.buscarContactoPorNick(this.nick).subscribe(
        (contacto: Contacto | null) => {
          if (contacto) {
            this.contactoEncontrado = contacto; // Asigna el contacto encontrado
          } else {
            this.contactoEncontrado = null; // Si no se encuentra, limpia el resultado
          }
        },
        (error) => {
          console.error('Error al buscar el contacto:', error);
        }
      );
    } else {
      this.contactoEncontrado = null; // Si no hay nick, limpia los resultados
    }
  }
}
