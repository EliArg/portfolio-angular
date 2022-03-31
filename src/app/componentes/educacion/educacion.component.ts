import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPortafolio:PortafolioapService) { }
  educacionList:any;
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
}
