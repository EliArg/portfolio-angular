import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EducacionEditarComponent } from './componentes/educacion-editar/educacion-editar.component';
import { ExperienciaEditarComponent } from './componentes/experiencia-editar/experiencia-editar.component';
import { HabilidadEditarComponent } from './componentes/habilidad-editar/habilidad-editar.component';
import { IndexComponent } from './componentes/index/index.component';
import { InformacionEditarComponent } from './componentes/informacion-editar/informacion-editar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectoEditarComponent } from './componentes/proyecto-editar/proyecto-editar.component';
import { RedEditarComponent } from './componentes/red-editar/red-editar.component';
import { APGuardService as guard } from './guards/ap-guard.service';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'portfolio', component:PortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'educacion/:id_ed', component:EducacionEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'experiencia/:id_ex', component:ExperienciaEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'habilidad/:id_hab', component:HabilidadEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'informacion/:id', component:InformacionEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'proyecto/:id_pr', component:ProyectoEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'red/:id_red', component:RedEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
