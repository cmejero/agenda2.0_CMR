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

  nick: string = '';  
  contactoEncontrado: Contacto | null = null;  

  @Output() buscarContacto = new EventEmitter<string>();  // Emite el nick al componente padre

  constructor(private httpService: HttpService) {}

  // Realiza la búsqueda del contacto por nick
  busquedaContacto(): void {
    if (this.nick.trim()) {  // Verifica si el nick no está vacío
      // Llama al servicio HTTP para buscar el contacto por su nick
      this.httpService.buscarContactoPorNick(this.nick).subscribe(
        (contacto: Contacto | null) => {
          this.contactoEncontrado = contacto ? contacto : null;
        },
        (error) => {
          console.error('Error al buscar el contacto:', error);
        }
      );
    } else {
      // Si el nick está vacío, limpia los resultados
      this.contactoEncontrado = null;
    }
  }
}
