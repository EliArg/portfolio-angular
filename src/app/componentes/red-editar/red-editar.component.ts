import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedapService } from 'src/app/servicios/redap.service';

@Component({
  selector: 'app-red-editar',
  templateUrl: './red-editar.component.html',
  styleUrls: ['./red-editar.component.css']
})
export class RedEditarComponent implements OnInit {
  
  id_red:number;
  red:any;
  
  constructor(
    private datosRed:RedapService, 
    private router:Router, 
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id_red = this.route.snapshot.params['id_red'];
    this.datosRed.obtenerRedPorId(this.id_red).subscribe(dato =>{
      this.red = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosRed.editarRed(this.id_red,this.red).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['/portfolio']);
  }
}
