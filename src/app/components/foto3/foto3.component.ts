import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria3Service } from '../../servicios/galeria3.service';

@Component({
  selector: 'app-foto3',
  templateUrl: './foto3.component.html',
  styleUrls: ['./foto3.component.css']
})
export class Foto3Component  {

  foto3: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria3Service: Galeria3Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto3 = this._galeria3Service.getFoto3( params['id'] );
    });
}
 }

