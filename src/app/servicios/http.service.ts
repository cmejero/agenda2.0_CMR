import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../modelos/contacto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

 private httpClient = inject(HttpClient)
contacto:Contacto[]=[]
constructor(private http: HttpClient) {}
private baseUrl = 'http://localhost:3000/contactos'; // URL del JSON Server

  getContacto(){

    return this.httpClient.request<Contacto[]>('GET', 'http://localhost:3000/contactos', {responseType:'json'});
  }

  guardarContacto(contacto: Contacto): Observable<Contacto> {
    return this.httpClient.post<Contacto>(this.baseUrl, contacto);
  }
  buscarContactoPorNick(nick: string): Observable<Contacto | null> {
    return this.http.get<Contacto[]>(`${this.baseUrl}?nick=${nick}`).pipe(
      map(contactos => contactos.length > 0 ? contactos[0] : null) // Si hay contactos, devolver el primero
    );
  }



}
