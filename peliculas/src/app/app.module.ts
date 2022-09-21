import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IndiceGenerosComponent,
    MenuComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
