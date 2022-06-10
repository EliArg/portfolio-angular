import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadapService {
  private baseURL = 'http://localhost:8080/habilidad';
  constructor(private httpClient:HttpClient) { }
  obtenerHabilidad():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(`${this.baseURL}`)
  }
  crearHabilidad(habilidad:Habilidad):Observable<Habilidad>{
    return this.httpClient.post<Habilidad>(`${this.baseURL}`, habilidad)
  }
  editarHabilidad(id_hab:number, habilidad:Habilidad):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_hab}`, habilidad)
  }
  obtenerHabilidadPorId(id_hab:number):Observable<Object>{
    return this.httpClient.get<Habilidad>(`${this.baseURL}/${id_hab}`)
  }
  eliminarHabilidad(id_hab:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_hab}`)
  }
}
