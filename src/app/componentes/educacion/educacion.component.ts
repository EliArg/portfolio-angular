import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion';
import { EducacionapService } from 'src/app/servicios/educacionap.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacionList:Educacion[]=[];
  educacion:Educacion = new Educacion();
  roles: string[];
  isAdmin = false;
  
  constructor(
    private datosEducacion:EducacionapService, 
    private router:Router, 
    private tokenService:TokenService){}
  
  ngOnInit(): void {
    this.obtenerEducacion();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerEducacion(){
    this.datosEducacion.obtenerEducacion().subscribe(data =>{
      this.educacionList=data;
    })}
    editarEducacion(id_ed:number){
      this.router.navigate(['educacion',id_ed])
    }
    eliminarEducacion(id_ed:number){
      this.datosEducacion.eliminarEducacion(id_ed).subscribe(dato =>{
        this.obtenerEducacion();
      })
    }
    crearEducacion(){
      this.datosEducacion.crearEducacion(this.educacion).subscribe(dato =>{
        console.log(dato);
      }, error => console.log(error));
      window.location.reload();
    }
    onSubmit(){
      this.crearEducacion();
    }  
    
  }
  