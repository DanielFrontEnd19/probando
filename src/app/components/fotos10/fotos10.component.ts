import { Component, OnInit } from '@angular/core';
import { Galeria10Service, Imagen10 } from '../../servicios/galeria10.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos10',
  templateUrl: './fotos10.component.html',
  styleUrls: ['./fotos10.component.css']
})
export class Fotos10Component implements OnInit {


  fotos10: Imagen10[] = [];
  constructor(private _galeria10Service: Galeria10Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos10 = this._galeria10Service.getFotos10();
  }
  verFoto10( idx: number ) {
    this.router.navigate( ['/foto10', idx] );
  }
}
