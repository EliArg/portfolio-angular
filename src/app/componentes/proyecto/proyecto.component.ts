import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { ProyectoapService } from 'src/app/servicios/proyectoap.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  
  proyectoList: Proyecto[] = [];
  proyecto:Proyecto = new Proyecto();
  roles: string[];
  isAdmin = false;
  proyectoForm:FormGroup;

  constructor(
    private datosProyecto:ProyectoapService, 
    private router:Router, 
    private tokenService:TokenService,
    private formBuilder:FormBuilder
  ) {
    this.proyectoForm = this.formBuilder.group(
      {
        nombre_pr:['',[Validators.required]],
        repositorio:['',[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    this.obtenerProyecto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerProyecto(){
  this.datosProyecto.obtenerProyecto().subscribe(data =>{
    this.proyectoList=data;
  })}
  editarProyecto(id_pr:number){
    this.router.navigate(['proyecto',id_pr])
  }
  eliminarProyecto(id_pr:number){
    this.datosProyecto.eliminarProyecto(id_pr).subscribe(dato =>{
      this.obtenerProyecto();
    })
  }
  crearProyecto(){
    this.datosProyecto.crearProyecto(this.proyecto).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
    window.location.reload();
  }
  onSubmit(){
    this.crearProyecto();
  }
  get Nombre() {
    return this.proyectoForm.get('nombre_pr');
  }
  get Repositorio() {
    return this.proyectoForm.get('repositorio');
  }  
}
