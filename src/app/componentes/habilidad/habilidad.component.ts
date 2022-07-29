import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/Habilidad';
import { HabilidadapService } from 'src/app/servicios/habilidadap.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  
  habilidadList: Habilidad[] = [];
  habilidad:Habilidad = new Habilidad();
  roles: string[];
  isAdmin = false;

  constructor(
    private datosHabilidad:HabilidadapService, 
    private router:Router, 
    private tokenService:TokenService){}

  ngOnInit(): void {
    this.obtenerHabilidad();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerHabilidad(){
  this.datosHabilidad.obtenerHabilidad().subscribe(data =>{
    this.habilidadList=data;
  })}
  editarHabilidad(id_hab:number){
    this.router.navigate(['habilidad',id_hab])
  }
  eliminarHabilidad(id_hab:number){
    this.datosHabilidad.eliminarHabilidad(id_hab).subscribe(dato =>{
      this.obtenerHabilidad();
    })
  }
  crearHabilidad(){
    this.datosHabilidad.crearHabilidad(this.habilidad).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
    window.location.reload();
  }
  onSubmit(){
    this.crearHabilidad();
  }
}
