import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { ExperienciaEditarComponent } from './componentes/experiencia-editar/experiencia-editar.component';
import { EducacionEditarComponent } from './componentes/educacion-editar/educacion-editar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RedComponent } from './componentes/red/red.component';
import { HabilidadEditarComponent } from './componentes/habilidad-editar/habilidad-editar.component';
import { ProyectoEditarComponent } from './componentes/proyecto-editar/proyecto-editar.component';
import { RedEditarComponent } from './componentes/red-editar/red-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    ExperienciaEditarComponent,
    EducacionEditarComponent,
    PortfolioComponent,
    RedComponent,
    HabilidadEditarComponent,
    ProyectoEditarComponent,
    RedEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
