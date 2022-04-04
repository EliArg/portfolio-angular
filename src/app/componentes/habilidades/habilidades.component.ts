import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';
import { Habilidad } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList:Habilidad[]=[];
  edithab:boolean=true;
  constructor(private datosPortafolio:PortafolioapService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.habilidadesList=data.habilidades;
    })
  }
  removeHab(index:number){
    if(index > -1){
      this.habilidadesList.splice(index,1);
    }
  }
  creacion(){
    this.edithab = false;
  }
  edicion(){
    this.edithab = true;
  }
}
