import { Component, OnInit } from '@angular/core';
import { Galeria4Service, Imagen4 } from '../../servicios/galeria4.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos4',
  templateUrl: './fotos4.component.html',
  styleUrls: ['./fotos4.component.css']
})
export class Fotos4Component implements OnInit {

  fotos4: Imagen4[] = [];
  constructor(private _galeria4Service: Galeria4Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos4 = this._galeria4Service.getFotos4();
  }
  verFoto4( idx: number ) {
    this.router.navigate( ['/foto4', idx] );
  }
}
