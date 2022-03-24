import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private datosPortafolio:PortafolioapService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;
    })
  }

}
