import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';
import { Proyecto } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  proyectosList:Proyecto[]=[];
  editpr:boolean=true;
  constructor(private datosPortafolio:PortafolioapService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.proyectosList=data.proyectos;
    })
  }
  removePr(index:number){
    if(index > -1){
      this.proyectosList.splice(index,1);
    }
  }
  creacion(){
    this.editpr = false;
  }
  edicion(){
    this.editpr = true;
  }
}
