import { Component, OnInit } from '@angular/core';
import { Galeria2Service, Imagen2 } from '../../servicios/galeria2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos2',
  templateUrl: './fotos2.component.html',
  styleUrls: ['./fotos2.component.css']
})
export class Fotos2Component implements OnInit {

  fotos2: Imagen2[] = [];
  constructor(private _galeria2Service: Galeria2Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos2 = this._galeria2Service.getFotos2();
  }
  verFoto2( idx: number ) {
    this.router.navigate( ['/foto2', idx] );
  }
}
