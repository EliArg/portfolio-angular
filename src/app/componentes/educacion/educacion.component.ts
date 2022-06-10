import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/Educacion';
import { EducacionapService } from 'src/app/servicios/educacionap.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosEducacion:EducacionapService, private router:Router) { }
  educacionList:Educacion[]=[];
  educacion:Educacion = new Educacion();
  ngOnInit(): void {
    this.obtenerEducacion();
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
  