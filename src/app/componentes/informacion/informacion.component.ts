import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Informacion } from 'src/app/modelos/Informacion';
import { InformacionapService } from 'src/app/servicios/informacionap.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  
  informacionList: Informacion[] = [];
  informacion:Informacion = new Informacion();
  roles: string[];
  isAdmin = false;
  informacionForm:FormGroup;
  
  constructor(
    private datosInformacion:InformacionapService, 
    private router:Router, 
    private tokenService:TokenService,
    private formBuilder:FormBuilder
  ) {
    this.informacionForm = this.formBuilder.group(
      {
        nombre:['',[Validators.required]],
        titulo:['',[Validators.required]],
        email:['',[Validators.email]]
      }
    )
  }

  ngOnInit(): void {
    this.obtenerInformacion();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerInformacion(){
  this.datosInformacion.obtenerInformacion().subscribe(data =>{
    this.informacionList=data;
  })}
  editarInformacion(id:number){
    this.router.navigate(['informacion',id])
  }
  eliminarInformacion(id:number){
    this.datosInformacion.eliminarInformacion(id).subscribe(dato =>{
      this.obtenerInformacion();
    })
  }
  crearInformacion(){
    this.datosInformacion.crearInformacion(this.informacion).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
    window.location.reload();
  }
  onSubmit(){
    this.crearInformacion();
  }  
  get Nombre() {
    return this.informacionForm.get('nombre');
  }
  get Titulo() {
    return this.informacionForm.get('titulo');
  }
  get Email() {
    return this.informacionForm.get('email');
  }
}
