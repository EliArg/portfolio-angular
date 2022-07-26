import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/modelos/NuevoUsuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre: string;
  username: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;
  registerForm:FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder:FormBuilder
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username:['',[Validators.required]],
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required]]
      }
    )
   }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.username, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
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
    return this.registerForm.get('username');
  }
  get Email() {
    return this.registerForm.get('email');
  }
  get Password() {
    return this.registerForm.get('password');
  }
}
