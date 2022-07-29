import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Red } from 'src/app/modelos/Red';
import { RedapService } from 'src/app/servicios/redap.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  
  redList: Red[] = [];
  red:Red = new Red();
  roles: string[];
  isAdmin = false;

  constructor(
    private datosRed:RedapService, 
    private router:Router, 
    private tokenService:TokenService){}

  ngOnInit(): void {
    this.obtenerRed();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
