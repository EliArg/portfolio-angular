import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaapService } from 'src/app/servicios/experienciaap.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {
  id_ex:number;
  experiencia:any;
  constructor(private datosExperiencia:ExperienciaapService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_ex = this.route.snapshot.params['id_ex'];
    this.datosExperiencia.obtenerExperienciaPorId(this.id_ex).subscribe(dato =>{
      this.experiencia = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosExperiencia.actualizarExperiencia(this.id_ex,this.experiencia).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['']);
  }
}
