import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from './home/home.component';
import 'hammerjs';
import { ResMateriasComponent } from './res-materias/res-materias.component';
import { ResTemasComponent } from './res-temas/res-temas.component';
import { ResTareasComponent } from './res-tareas/res-tareas.component';
import { FormularioTemaComponent } from './formulario-tema/formulario-tema.component';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { EditarTemaComponent } from './editar-tema/editar-tema.component';
@NgModule({
  declarations: [
    AppComponent,
    IngresoDatosComponent,
    ResultadosComponent,
    HomeComponent,
    ResMateriasComponent,
    ResTemasComponent,
    ResTareasComponent,
    FormularioTemaComponent,
    FormularioTareaComponent,
    EditarUsuarioComponent,
    EditarMateriaComponent,
    EditarTemaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
