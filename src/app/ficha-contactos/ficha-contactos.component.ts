import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from '../modelos/contacto';

@Component({
  selector: 'app-ficha-contactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-contactos.component.html',
  styleUrls: ['./ficha-contactos.component.css']
})
export class FichaContactosComponent {
  @Input() contacto!: Contacto;  // Recibe el contacto desde el componente padre
  @Output() onEliminar = new EventEmitter<number>();  // Emite el ID del contacto al componente padre

  // Emite el ID del contacto para eliminarlo
  eliminarContacto(): void {
    this.onEliminar.emit(this.contacto.id);  // Envía el ID al componente padre para eliminar el contacto
  }
}
