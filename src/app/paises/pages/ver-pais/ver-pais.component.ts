import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais-interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService 
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.getPaisPorAlpha(param['id']) ),
        tap( console.log )
      )
      .subscribe({
        next:(pais) => {
          console.log(pais[0]);
          this.pais = pais[0];
        }
      })

  }

}
