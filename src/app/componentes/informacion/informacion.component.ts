import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  informacion:any;
  constructor(private datosPortfolio:PortfolioapService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.informacion=data.informacion;
    });
  }
}
