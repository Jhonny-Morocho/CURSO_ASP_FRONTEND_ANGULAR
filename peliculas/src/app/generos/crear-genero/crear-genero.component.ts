import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { crearGeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,private generosService:GenerosService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:["",[Validators.required]]
    });
  }
  guardarCambios(){
    console.log(this.form.value);
    const genero:crearGeneroDTO=this.form.value;
    this.generosService.crearGenero(genero).subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
  }
}
