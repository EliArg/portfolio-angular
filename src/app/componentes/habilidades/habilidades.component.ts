import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList:any;
  constructor(private datosPortafolio:PortafolioapService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.habilidadesList=data.habilidades;
    })
  }
}
