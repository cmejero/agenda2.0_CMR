import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { HttpService } from '../servicios/http.service';
import { Contacto } from '../modelos/contacto';
import { FichaContactosComponent } from '../ficha-contactos/ficha-contactos.component';


@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [FichaContactosComponent, CommonModule, NgFor],
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactosPadre: Contacto[] = [];  

  httpService: HttpService = inject(HttpService);  

  // Obtiene los contactos desde el servicio
  getContacto(): void {
    this.httpService.getContacto().subscribe(resp => {
      this.contactosPadre = resp;  // Asigna la respuesta (contactos) a la lista
    });
  }

  // Elimina un contacto dado su ID
  eliminarContacto(id: number) {
    console.log('Intentando eliminar contacto con ID:', id);
    this.httpService.eliminarContacto(id).subscribe({
      next: () => {
        console.log(`Contacto con ID ${id} eliminado`);
        // Aquí puedes hacer cualquier otra acción después de eliminar el contacto
      },
      error: (err) => {
        console.error('Error al eliminar el contacto', err);
      }
    });
  }

  ngOnInit(): void {
    this.getContacto();  // Llama a getContacto cuando el componente se inicializa
  }
}

