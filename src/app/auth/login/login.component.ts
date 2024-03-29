import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/LoginUsuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  username: string;
  password: string;
  roles: string[] = [];
  errMsj: string;
  loginForm:FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder:FormBuilder
  ) {
    this.loginForm = this.formBuilder.group(
      {
        username:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )
   }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.username, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = "Usuario o contraseña incorrectos"
        console.log(err.error.message);
      }
    );
  }
  volver(){
    this.router.navigate(['/portfolio']);
  }
  cancelar(){
    this.router.navigate(['']);
  }
  get Username() {
    return this.loginForm.get('username');
  }
  get Password() {
    return this.loginForm.get('password');
  }
}
