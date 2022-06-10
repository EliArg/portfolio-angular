import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ExperienciaapService } from 'src/app/servicios/experienciaap.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] = [];
  experiencia:Experiencia = new Experiencia();
  constructor(private datosExperiencia:ExperienciaapService, private router:Router) {
   }

  ngOnInit(): void {
    this.obtenerExperiencia();
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
