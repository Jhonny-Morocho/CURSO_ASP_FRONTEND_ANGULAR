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
   /*  this.activateRouter.params.subscribe((params:any)=>{
      console.log(params);
      this.generosService.obtenerPorId(params.id).subscribe(genero=>
        {
          this.modelo=genero;
        },()=>this.router.navigate(['/generos'])
      );
    }); */
  }
  guardarCambios($event:Event){
    console.log($event);
  }

}
