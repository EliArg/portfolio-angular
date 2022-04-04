import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';
import { Educacion } from 'src/app/modelos/modelos';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPortafolio:PortafolioapService) { }
  educacionList:Educacion[]=[];
  edited:boolean=true;
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion;
    })
  }
  removeEd(index:number){
    if(index > -1){
      this.educacionList.splice(index,1);
    }
  }
  creacion(){
    this.edited = false;
  }
  edicion(){
    this.edited=true;
  }
}
