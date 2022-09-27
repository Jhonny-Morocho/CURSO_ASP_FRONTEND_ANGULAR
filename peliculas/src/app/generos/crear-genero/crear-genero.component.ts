import { Component, OnInit } from '@angular/core';
import {  generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {
  modelo!:generoDTO;
  constructor(private generosService:GenerosService) { }

  ngOnInit(): void {

  }
  guardarCambios(genero:generoDTO){
    this.generosService.crearGenero(genero).subscribe(response=>{
      console.log(response);
      alert("REGISTRO GUARDO");
    },error=>{
      console.log(error);
      alert("ERROR AL GUARDAR");
    });
  }
}
