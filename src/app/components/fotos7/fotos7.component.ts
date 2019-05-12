import { Component, OnInit } from '@angular/core';
import { Galeria7Service, Imagen7 } from '../../servicios/galeria7.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos7',
  templateUrl: './fotos7.component.html',
  styleUrls: ['./fotos7.component.css']
})
export class Fotos7Component implements OnInit {


  fotos7: Imagen7[] = [];
  constructor(private _galeria7Service: Galeria7Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos7 = this._galeria7Service.getFotos7();
  }
  verFoto7( idx: number ) {
    this.router.navigate( ['/foto7', idx] );
  }
}
