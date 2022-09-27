import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceGenerosComponent } from './indice-generos/indice-generos.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
@NgModule({
  declarations: [
    AppComponent,
    IndiceGenerosComponent,
    MenuComponent,
    ListadoPeliculasComponent,
    CrearGeneroComponent,
    EditarGeneroComponent,
    FormularioGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
