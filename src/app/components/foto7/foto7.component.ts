import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria7Service } from '../../servicios/galeria7.service';

@Component({
  selector: 'app-foto7',
  templateUrl: './foto7.component.html',
  styleUrls: ['./foto7.component.css']
})
export class Foto7Component  {

  foto7: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria7Service: Galeria7Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto7 = this._galeria7Service.getFoto7( params['id'] );
    });
}
 }