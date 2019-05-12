import { Component, OnInit } from '@angular/core';
import { Galeria8Service, Imagen8 } from '../../servicios/galeria8.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos8',
  templateUrl: './fotos8.component.html',
  styleUrls: ['./fotos8.component.css']
})
export class Fotos8Component implements OnInit {


  fotos8: Imagen8[] = [];
  constructor(private _galeria8Service: Galeria8Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos8 = this._galeria8Service.getFotos8();
  }
  verFoto8( idx: number ) {
    this.router.navigate( ['/foto8', idx] );
  }
}
