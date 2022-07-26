import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionapService } from 'src/app/servicios/educacionap.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {
  id_ed:number;
  educacion:any;
  educacionForm:FormGroup;

  constructor(
    private datosEducacion:EducacionapService, 
    private router:Router, 
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {
      this.educacionForm = this.formBuilder.group(
        {
          curso:['',[Validators.required]],
          institucion_n:['',[Validators.required]],
          inicio_ed:['',[Validators.required]]
        }
      )
    }

  ngOnInit(): void {
    this.id_ed = this.route.snapshot.params['id_ed'];
    this.datosEducacion.obtenerEducacionPorId(this.id_ed).subscribe(dato =>{
      this.educacion = dato;
    },error => console.log(error));
  }
  onSubmit(){
    this.datosEducacion.editarEducacion(this.id_ed,this.educacion).subscribe(dato => {
      this.volver();
    },error => console.log(error));
  }
  volver(){
    this.router.navigate(['/portfolio']);
  }
  get Curso() {
    return this.educacionForm.get('curso');
  }
  get Institucion() {
    return this.educacionForm.get('institucion_n');
  }
  get Inicio() {
    return this.educacionForm.get('inicio_ed');
  }
}