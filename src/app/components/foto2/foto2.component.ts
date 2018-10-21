import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria2Service } from '../../servicios/galeria2.service';

@Component({
  selector: 'app-foto2',
  templateUrl: './foto2.component.html',
  styleUrls: ['./foto2.component.css']
})
export class Foto2Component {
foto2: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria2Service: Galeria2Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto2 = this._galeria2Service.getFoto2( params['id'] );
    });
}
 }
