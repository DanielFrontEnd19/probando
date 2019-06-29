import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Galeria1Service } from '../../servicios/galeria1.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: Galeria1Service
    ) {

    this.activatedRoute.params.subscribe( params => {
        this.heroe = this._heroesService.getHeroe( params['id'] );
        // console.log(this.heroe);
    });

  }

}
