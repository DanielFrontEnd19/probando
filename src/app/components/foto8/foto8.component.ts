import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria8Service } from '../../servicios/galeria8.service';

@Component({
  selector: 'app-foto8',
  templateUrl: './foto8.component.html',
  styleUrls: ['./foto8.component.css']
})
export class Foto8Component  {

  foto8: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria8Service: Galeria8Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto8 = this._galeria8Service.getFoto8( params['id'] );
    });
}
 }
