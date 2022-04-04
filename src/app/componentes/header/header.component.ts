import { Component, OnInit } from '@angular/core';
import { PortafolioapService } from 'src/app/servicios/portafolioap.service';
import { Red } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  redesList:Red []=[];
  editred:boolean=true;
  constructor(private datosPortafolio:PortafolioapService) { }
  
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes;
    })
  }
  removeRed(index:number){
    if(index > -1){
      this.redesList.splice(index,1);
    }
  }
  creacion(){
    this.editred = false;
  }
  edicion(){
    this.editred = true;
  }
}
