import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  informacionForm:FormGroup;

  constructor(
    private datosInformacion:InformacionapService, 
    private router:Router, 
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) {
    this.informacionForm = this.formBuilder.group(
      {
        nombre:['',[Validators.required]],
        titulo:['',[Validators.required]],
        email:['',[Validators.email]]
      }
    )
  }

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
  get Nombre() {
    return this.informacionForm.get('nombre');
  }
  get Titulo() {
    return this.informacionForm.get('titulo');
  }
  get Email() {
    return this.informacionForm.get('email');
  }
}
