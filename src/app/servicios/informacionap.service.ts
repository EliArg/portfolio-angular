import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../modelos/Informacion';

@Injectable({
  providedIn: 'root'
})
export class InformacionapService {
  private baseURL = 'https://apback-eliarg.herokuapp.com/informacion';
  constructor(private httpClient:HttpClient) { }
  obtenerInformacion():Observable<Informacion[]>{
    return this.httpClient.get<Informacion[]>(`${this.baseURL}`)
  }
  crearInformacion(informacion:Informacion):Observable<Informacion>{
    return this.httpClient.post<Informacion>(`${this.baseURL}`, informacion)
  }
  editarInformacion(id:number, informacion:Informacion):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, informacion)
  }
  obtenerInformacionPorId(id:number):Observable<Object>{
    return this.httpClient.get<Informacion>(`${this.baseURL}/${id}`)
  }
  eliminarInformacion(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}