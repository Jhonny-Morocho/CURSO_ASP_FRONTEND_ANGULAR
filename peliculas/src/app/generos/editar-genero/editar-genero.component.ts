import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {
  modelo!:generoDTO;
  constructor(private generosService:GenerosService,
              private router:Router,
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params:any)=>{
      console.log(params);
      this.generosService.obtenerPorId(params.id).subscribe(genero=>
        {
          console.log(genero);
          this.modelo=genero;
        },()=>this.router.navigate(['/generos'])
      );
    });
  }
  guardarCambios(genero:generoDTO){
    console.log(genero);
    this.generosService.editar(genero,this.modelo.id).subscribe(response=>{
      this.router.navigate(['/generos']);
      
    },error=>{
      console.log(error);
      alert("ERROR AL ACTULIZAR EL GENERO");
    });

  }

}
