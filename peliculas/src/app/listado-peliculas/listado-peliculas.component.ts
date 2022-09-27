import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from '../generos/genero';
import { GenerosService } from '../generos/generos.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  //tabla
  displayedColumns: string[] = ['id','nombre','acciones'];
  //
  cantidadTotalRegistros:any;
  paginaActual=1;
  generos:generoDTO[]=[];
  cantidadRegistroMostar:number=5;
  constructor(private generosService:GenerosService) { }

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostar);
  }
  actalizarPaginacion(datos:PageEvent){
    console.log(datos);
    this.paginaActual=datos.pageIndex+1;
    this.cantidadRegistroMostar=datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostar);
  }

  cargarRegistros(pagina:number,cantidadElemosMostar:number){
    this.generosService.obtenerTodos(pagina,cantidadElemosMostar).subscribe((response:HttpResponse<any>)=>{
      console.log(response);
      console.log(response.body);
      this.generos=response.body;
      console.log(response.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros=response.headers.get("cantidadTotalRegistros")
    },error=>{      
      console.log(error);
      alert("ERROR AL CARGA REGISTROS");
    });
  }
}
