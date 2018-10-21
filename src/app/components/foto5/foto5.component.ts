import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria5Service } from '../../servicios/galeria5.service';

@Component({
  selector: 'app-foto5',
  templateUrl: './foto5.component.html',
  styleUrls: ['./foto5.component.css']
})
export class Foto5Component  {

  foto5: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria5Service: Galeria5Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto5 = this._galeria5Service.getFoto5( params['id'] );
    });
}
 }
