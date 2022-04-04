import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';
import { Experiencia } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia []= [];
  editex:boolean=true;
  constructor(private datosPortafolio:PortafolioapService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;
    })
  }
  removeExp(index:number){
    if(index > -1){
      this.experienciaList.splice(index,1);
    }
  }
  creacion(){
    this.editex = false;
  }
  edicion(){
    this.editex = true;
  }
}
