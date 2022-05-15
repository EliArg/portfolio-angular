import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { Proyecto } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList:Proyecto[]=[];
  editpr:boolean=true;
  constructor(private datosPortfolio:PortfolioapService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.proyectosList=data.proyectos;
    })
  }
  borrarPr(id_pr:number){
    
  }
  creacion(){
    this.editpr = false;
  }
  edicion(){
    this.editpr = true;
  }
}
