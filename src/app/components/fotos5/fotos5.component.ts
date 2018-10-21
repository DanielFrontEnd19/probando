import { Component, OnInit } from '@angular/core';
import { Galeria5Service, Imagen5 } from '../../servicios/galeria5.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos5',
  templateUrl: './fotos5.component.html',
  styleUrls: ['./fotos5.component.css']
})
export class Fotos5Component implements OnInit {

  fotos5: Imagen5[] = [];
  constructor(private _galeria5Service: Galeria5Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos5 = this._galeria5Service.getFotos5();
  }
  verFoto5( idx: number ) {
    this.router.navigate( ['/foto5', idx] );
  }
}
