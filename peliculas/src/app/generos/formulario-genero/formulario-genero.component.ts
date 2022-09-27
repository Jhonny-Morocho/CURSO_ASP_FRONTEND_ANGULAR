import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { crearGeneroDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {
  form!:FormGroup;
  @Input() modelo!:generoDTO;
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
      alert("REGISTRO GUARDO");
    },error=>{
      console.log(error);
      alert("ERROR AL GUARDAR");
    });
  }
}
