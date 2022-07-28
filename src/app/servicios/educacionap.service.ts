import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionapService {
  private baseURL = 'https://apback-eliarg.herokuapp.com/educacion';
  constructor(private httpClient:HttpClient) { }
  obtenerEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.baseURL}`)
  }
  crearEducacion(educacion:Educacion):Observable<Educacion>{
    return this.httpClient.post<Educacion>(`${this.baseURL}`, educacion)
  }
  editarEducacion(id_ed:number, educacion:Educacion):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_ed}`, educacion)
  }
  obtenerEducacionPorId(id_ed:number):Observable<Object>{
    return this.httpClient.get<Educacion>(`${this.baseURL}/${id_ed}`)
  }
  eliminarEducacion(id_ed:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_ed}`)
  }
}
