import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria6Service } from '../../servicios/galeria6.service';

@Component({
  selector: 'app-foto6',
  templateUrl: './foto6.component.html',
  styleUrls: ['./foto6.component.css']
})
export class Foto6Component  {

  foto6: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria6Service: Galeria6Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto6 = this._galeria6Service.getFoto6( params['id'] );
    });
}
 }
