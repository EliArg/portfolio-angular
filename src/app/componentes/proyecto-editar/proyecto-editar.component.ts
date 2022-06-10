import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoapService } from 'src/app/servicios/proyectoap.service';

@Component({
  selector: 'app-proyecto-editar',
  templateUrl: './proyecto-editar.component.html',
  styleUrls: ['./proyecto-editar.component.css']
})
export class ProyectoEditarComponent implements OnInit {
  id_pr:number;
  proyecto:any;
  constructor(private datosProyecto:ProyectoapService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_pr = this.route.snapshot.params['id_pr'];
    this.datosProyecto.obtenerProyectoPorId(this.id_pr).subscribe(dato =>{
      this.proyecto = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosProyecto.editarProyecto(this.id_pr,this.proyecto).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['']);
  }
}
