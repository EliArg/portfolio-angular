import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { Habilidad } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList:Habilidad[]=[];
  edithab:boolean=true;
  constructor(private datosPortfolio:PortfolioapService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.habilidadesList=data.habilidades;
    })
  }
  borrarHab(id_hab:number){
    
  }
  creacion(){
    this.edithab = false;
  }
  edicion(){
    this.edithab = true;
  }
}
