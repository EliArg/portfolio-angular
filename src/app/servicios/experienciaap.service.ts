import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaapService {
  private baseURL = 'https://apback-eliarg.herokuapp.com/experiencia';
  constructor(private httpClient:HttpClient) { }
  obtenerExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.baseURL}`)
  }
  crearExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.httpClient.post<Experiencia>(`${this.baseURL}`, experiencia)
  }
  actualizarExperiencia(id:number, experiencia:Experiencia):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, experiencia)
  }
  obtenerExperienciaPorId(id:number):Observable<Object>{
    return this.httpClient.get<Experiencia>(`${this.baseURL}/${id}`)
  }
  eliminarExperiencia(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
