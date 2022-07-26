import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  redForm:FormGroup;
  
  constructor(
    private datosRed:RedapService, 
    private router:Router, 
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {
      this.redForm = this.formBuilder.group(
        {
          nombre_red:['',[Validators.required]],
          link_red:['',[Validators.required]]
        }
      )
    }

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
  get Red() {
    return this.redForm.get('nombre_red');
  }
  get Link() {
    return this.redForm.get('link_red');
  }
}
