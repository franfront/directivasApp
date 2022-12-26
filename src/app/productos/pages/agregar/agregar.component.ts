import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {

  // miColor: string = 'blue';
  texto1: string = 'Este es un texto';
  color: string ='red';

  miForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  existeError(campo: string): boolean {
    return this.miForm.get(campo)?.invalid || false;
  }


  cambiarTexto(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
     const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
     this.color = color;
  }
}
