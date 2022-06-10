import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../modelos/Red';

@Injectable({
  providedIn: 'root'
})
export class RedapService {
  private baseURL = 'http://localhost:8080/red';
  constructor(private httpClient:HttpClient) { }
  obtenerRed():Observable<Red[]>{
    return this.httpClient.get<Red[]>(`${this.baseURL}`)
  }
  crearRed(red:Red):Observable<Red>{
    return this.httpClient.post<Red>(`${this.baseURL}`, red)
  }
  editarRed(id_red:number, red:Red):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_red}`, red)
  }
  obtenerRedPorId(id_red:number):Observable<Object>{
    return this.httpClient.get<Red>(`${this.baseURL}/${id_red}`)
  }
  eliminarRed(id_red:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_red}`)
  }
}
