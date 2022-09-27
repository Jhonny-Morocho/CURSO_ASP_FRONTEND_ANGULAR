import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onSubmit:EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.modelo);
    this.form=this.formBuilder.group({
      nombre:["",[Validators.required]]
    });
    this.form.patchValue(this.modelo);
  }
  guardarCambios(){
    console.log("guardar cambios");
    const genero:generoDTO=this.form.value;
    console.log(genero);
    this.onSubmit.emit(genero);
  }
}
