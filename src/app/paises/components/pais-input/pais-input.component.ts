import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  termino: string[] = [];

  buscar(){
    console.log('Hola Mundo');
    console.log(this.termino);
  }

}
