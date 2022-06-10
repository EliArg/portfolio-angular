import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/Habilidad';
import { HabilidadapService } from 'src/app/servicios/habilidadap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habilidadList: Habilidad[] = [];
  habilidad:Habilidad = new Habilidad();
  constructor(private datosHabilidad:HabilidadapService, private router:Router) {
   }

  ngOnInit(): void {
    this.obtenerHabilidad();
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
