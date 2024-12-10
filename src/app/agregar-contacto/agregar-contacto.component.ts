
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


  @Output() contactoAgregado = new EventEmitter<Contacto>();

  nuevoContacto:Contacto = {
    nombreCompleto: '',
    nick:'',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    localidad: ''
  };

  // Inyección del servicio de contactos
  contactoSrv = inject(ContactosService);

  // Método para agregar el contacto al servicio
   guardarContacto() {
    if (this.nuevoContacto.nombreCompleto && this.nuevoContacto.email) {
      // Emitir los datos al componente padre
      this.contactoAgregado.emit(this.nuevoContacto);

      // Limpiar el formulario después de agregar el contacto
      this.nuevoContacto = {

        nombreCompleto: '',
        nick:'',
        email: '',
        telefono: '',
        fechaNacimiento: '',
        localidad: ''
      };
    } else {
      console.error("Los campos son obligatorios");
    }
  }
}



