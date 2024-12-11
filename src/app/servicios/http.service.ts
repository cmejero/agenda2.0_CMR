import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../modelos/contacto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpClient = inject(HttpClient);  // Inyección del servicio HttpClient
  contacto: Contacto[] = [];  

  private baseUrl = 'http://localhost:3000/contactos'; // URL base del servicio (JSON Server)

  // Método para obtener todos los contactos
  getContacto() {
    return this.httpClient.request<Contacto[]>('GET', this.baseUrl, { responseType: 'json' });
  }

  // Método para guardar un nuevo contacto
  guardarContacto(contacto: Contacto): Observable<Contacto> {
    return this.httpClient.post<Contacto>(this.baseUrl, contacto);  // Realiza un POST para guardar el contacto
  }

  // Método para buscar un contacto por su 'nick'
  buscarContactoPorNick(nick: string): Observable<Contacto | null> {
    return this.httpClient.get<Contacto[]>(`${this.baseUrl}?nick=${nick}`).pipe(
      map(contactos => contactos.length > 0 ? contactos[0] : null)  // Devuelve el primer contacto encontrado o null
    );
  }

  eliminarContacto(id: number) {
    console.log('Eliminando contacto con ID:', id);  // Verifica que el ID esté llegando
    return this.httpClient.delete<void>(`http://localhost:3000/contactos/${id}`);
  }
  
}

