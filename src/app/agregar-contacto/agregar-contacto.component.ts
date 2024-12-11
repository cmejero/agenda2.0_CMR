
import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { Contacto } from '../modelos/contacto';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  selector: 'app-agregar-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-contacto.component.html',
  styleUrl: './agregar-contacto.component.css'
})
export class AgregarContactoComponent {

  @Output() contactoAgregado = new EventEmitter<Contacto>();  // Emisor de evento al componente padre

  nuevoContacto: Contacto = {  // Inicialización del objeto nuevo contacto
    id: Math.floor(Math.random() * 10000),
    nombreCompleto: '',
    nick: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    localidad: ''
  };

  contactoSrv = inject(ContactosService);  // Inyección del servicio de contactos

  // Método para guardar el contacto y emitir al componente padre
  guardarContacto() {
    if (this.nuevoContacto.nombreCompleto && this.nuevoContacto.email) {  // Validación de campos requeridos
      this.contactoAgregado.emit(this.nuevoContacto);  // Emitir el contacto al componente padre

      // Limpiar el formulario después de agregar el contacto
      this.nuevoContacto = {
        id: Math.floor(Math.random() * 10000),
        nombreCompleto: '',
        nick: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
        localidad: ''
      };
    } else {
      console.error("Los campos son obligatorios");  // Mensaje de error si faltan campos
    }
  }
}




