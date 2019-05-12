import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria10Service } from '../../servicios/galeria10.service';

@Component({
  selector: 'app-foto10',
  templateUrl: './foto10.component.html',
  styleUrls: ['./foto10.component.css']
})
export class Foto10Component  {

  foto10: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria10Service: Galeria10Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto10 = this._galeria10Service.getFoto10( params['id'] );
    });
}
 }
