import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ExperienciaapService } from 'src/app/servicios/experienciaap.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] = [];
  experiencia:Experiencia = new Experiencia();
  roles: string[];
  isAdmin = false;
  experienciaForm:FormGroup;

  constructor(
    private datosExperiencia:ExperienciaapService, 
    private router:Router, 
    private tokenService:TokenService,
    private formBuilder:FormBuilder
    ) {
      this.experienciaForm = this.formBuilder.group(
        {
          trabajo:['',[Validators.required]],
          empresa_n:['',[Validators.required]],
          inicio_ex:['',[Validators.required]]
        }
      )
    }


  ngOnInit(): void {
    this.obtenerExperiencia();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerExperiencia(){
  this.datosExperiencia.obtenerExperiencia().subscribe(data =>{
    this.experienciaList=data;
  })}
  editarExperiencia(id_ex:number){
    this.router.navigate(['experiencia',id_ex])
  }
  eliminarExperiencia(id_ex:number){
    this.datosExperiencia.eliminarExperiencia(id_ex).subscribe(dato =>{
      this.obtenerExperiencia();
    })
  }
  crearExperiencia(){
    this.datosExperiencia.crearExperiencia(this.experiencia).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
    window.location.reload();
  }
  onSubmit(){
    this.crearExperiencia();
  }  
  get Trabajo() {
    return this.experienciaForm.get('trabajo');
  }
  get Empresa() {
    return this.experienciaForm.get('empresa_n');
  }
  get Inicio() {
    return this.experienciaForm.get('inicio_ex');
  }
}
