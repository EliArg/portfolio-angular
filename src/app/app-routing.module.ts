import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionEditarComponent } from './componentes/educacion-editar/educacion-editar.component';
import { ExperienciaEditarComponent } from './componentes/experiencia-editar/experiencia-editar.component';
import { HabilidadEditarComponent } from './componentes/habilidad-editar/habilidad-editar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectoEditarComponent } from './componentes/proyecto-editar/proyecto-editar.component';
import { RedEditarComponent } from './componentes/red-editar/red-editar.component';

const routes: Routes = [
  {path:'', component:PortfolioComponent},
  {path:'educacion/:id_ed', component:EducacionEditarComponent},
  {path:'experiencia/:id_ex', component:ExperienciaEditarComponent},
  {path:'habilidad/:id_hab', component:HabilidadEditarComponent},
  {path:'proyecto/:id_pr', component:ProyectoEditarComponent},
  {path:'red/:id_red', component:RedEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
