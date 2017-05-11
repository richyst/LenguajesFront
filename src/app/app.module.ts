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
@NgModule({
  declarations: [
    AppComponent,
    IngresoDatosComponent,
    ResultadosComponent,
    HomeComponent
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
