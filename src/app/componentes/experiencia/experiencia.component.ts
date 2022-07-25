import { Component, OnInit } from '@angular/core';
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
  constructor(private datosExperiencia:ExperienciaapService, private router:Router, private tokenService:TokenService) {
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
}
