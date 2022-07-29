import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformacionapService } from 'src/app/servicios/informacionap.service';

@Component({
  selector: 'app-informacion-editar',
  templateUrl: './informacion-editar.component.html',
  styleUrls: ['./informacion-editar.component.css']
})
export class InformacionEditarComponent implements OnInit {
  
  id:number;
  informacion:any;

  constructor(
    private datosInformacion:InformacionapService, 
    private router:Router, 
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.datosInformacion.obtenerInformacionPorId(this.id).subscribe(dato =>{
      this.informacion = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosInformacion.editarInformacion(this.id,this.informacion).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['/portfolio']);
  }
}
