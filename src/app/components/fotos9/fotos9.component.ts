import { Component, OnInit } from '@angular/core';
import { Galeria9Service, Imagen9 } from '../../servicios/galeria9.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos9',
  templateUrl: './fotos9.component.html',
  styleUrls: ['./fotos9.component.css']
})
export class Fotos9Component implements OnInit {


  fotos9: Imagen9[] = [];
  constructor(private _galeria9Service: Galeria9Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos9 = this._galeria9Service.getFotos9();
  }
  verFoto9( idx: number ) {
    this.router.navigate( ['/foto9', idx] );
  }
}