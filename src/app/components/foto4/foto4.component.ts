import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria4Service } from '../../servicios/galeria4.service';

@Component({
  selector: 'app-foto4',
  templateUrl: './foto4.component.html',
  styleUrls: ['./foto4.component.css']
})
export class Foto4Component  {

  foto4: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria4Service: Galeria4Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto4 = this._galeria4Service.getFoto4( params['id'] );
    });
}
 }
