import { Component, OnInit } from '@angular/core';
import { Galeria3Service, Imagen3 } from '../../servicios/galeria3.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fotos3',
  templateUrl: './fotos3.component.html',
  styleUrls: ['./fotos3.component.css']
})
export class Fotos3Component implements OnInit {

  fotos3: Imagen3[] = [];
  constructor(private _galeria3Service: Galeria3Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos3 = this._galeria3Service.getFotos3();
  }
  verFoto3( idx: number ) {
    this.router.navigate( ['/foto3', idx] );
  }
}
