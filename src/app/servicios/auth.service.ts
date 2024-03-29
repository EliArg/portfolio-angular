import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../modelos/JwtDTO';
import { LoginUsuario } from '../modelos/LoginUsuario';
import { NuevoUsuario } from '../modelos/NuevoUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://apback-eliarg.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
