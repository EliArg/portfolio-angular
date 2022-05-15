import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { Educacion } from 'src/app/modelos/modelos';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioapService) { }
  educacionList:Educacion[]=[];
  edited:boolean=true;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion;
    })
  }
  borrarEd(id_ed:number){
    
  }
  creacion(){
    this.edited = false;
  }
  edicion(){
    this.edited=true;
  }
}
