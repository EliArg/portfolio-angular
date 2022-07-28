import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoapService {
  private baseURL = 'https://apback-eliarg.herokuapp.com/proyecto';
  constructor(private httpClient:HttpClient) { }
  obtenerProyecto():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}`)
  }
  crearProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(`${this.baseURL}`, proyecto)
  }
  editarProyecto(id_pr:number, proyecto:Proyecto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_pr}`, proyecto)
  }
  obtenerProyectoPorId(id_pr:number):Observable<Object>{
    return this.httpClient.get<Proyecto>(`${this.baseURL}/${id_pr}`)
  }
  eliminarProyecto(id_pr:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_pr}`)
  }
}
