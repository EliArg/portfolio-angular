import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Red } from 'src/app/modelos/Red';
import { PortfolioapService } from 'src/app/servicios/portfolioap.service';
import { RedapService } from 'src/app/servicios/redap.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  redList: Red[] = [];
  red:Red = new Red();
  constructor(private datosRed:RedapService, private router:Router) {
   }

  ngOnInit(): void {
    this.obtenerRed();
  }
  private obtenerRed(){
  this.datosRed.obtenerRed().subscribe(data =>{
    this.redList=data;
  })}
  editarRed(id_red:number){
    this.router.navigate(['red',id_red])
  }
  eliminarRed(id_red:number){
    this.datosRed.eliminarRed(id_red).subscribe(dato =>{
      this.obtenerRed();
    })
  }
  crearRed(){
    this.datosRed.crearRed(this.red).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
    window.location.reload();
  }
  onSubmit(){
    this.crearRed();
  }  
}
