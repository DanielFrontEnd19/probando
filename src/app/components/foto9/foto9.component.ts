import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria9Service } from '../../servicios/galeria9.service';

@Component({
  selector: 'app-foto9',
  templateUrl: './foto9.component.html',
  styleUrls: ['./foto9.component.css']
})
export class Foto9Component  {

  foto9: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _galeria9Service: Galeria9Service
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.foto9 = this._galeria9Service.getFoto9( params['id'] );
    });
}
 }