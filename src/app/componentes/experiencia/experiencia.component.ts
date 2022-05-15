import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { Experiencia } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia []= [];
  editex:boolean=true;
  constructor(private datosPortfolio:PortfolioapService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;
    })
  }
  borrarExp(id_ex:number){
    
  }
  creacion(){
    this.editex = false;
  }
  edicion(){
    this.editex = true;
  }
}
