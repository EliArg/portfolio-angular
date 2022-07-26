import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadapService } from 'src/app/servicios/habilidadap.service';

@Component({
  selector: 'app-habilidad-editar',
  templateUrl: './habilidad-editar.component.html',
  styleUrls: ['./habilidad-editar.component.css']
})
export class HabilidadEditarComponent implements OnInit {
  
  id_hab:number;
  habilidad:any;
  habilidadForm:FormGroup;

  constructor(
    private datosHabilidad:HabilidadapService, 
    private router:Router, 
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {
      this.habilidadForm = this.formBuilder.group(
        {
          skill:['',[Validators.required]],
          nivel:['',[Validators.required]]
        }
      )
    }

  ngOnInit(): void {
    this.id_hab = this.route.snapshot.params['id_hab'];
    this.datosHabilidad.obtenerHabilidadPorId(this.id_hab).subscribe(dato =>{
      this.habilidad = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosHabilidad.editarHabilidad(this.id_hab,this.habilidad).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['/portfolio']);
  }
  get Skill() {
    return this.habilidadForm.get('skill');
  }
  get Nivel() {
    return this.habilidadForm.get('nivel');
  }
}
