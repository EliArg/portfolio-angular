import { Component, OnInit } from '@angular/core';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { Red } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  redesList:Red []=[];
  editred:boolean=true;
  constructor(private datosPortfolio:PortfolioapService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes;
    })
  }
  borrarRed(id_red:number){
    
  }
  creacion(){
    this.editred = false;
  }
  edicion(){
    this.editred = true;
  }
}
