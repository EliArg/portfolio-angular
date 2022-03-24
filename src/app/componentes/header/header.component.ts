import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  redesList:any;
  constructor(private datosPortafolio:PortafolioapService) { }
  
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes;
    })
  }

}
