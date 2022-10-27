import { Component, Input } from '@angular/core';

//services
import { PaisService } from '../../services/pais.service';
//Interface
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent{

  @Input() paises: Country[] = [];

  constructor( private paisService: PaisService ) { }


}
