import { Component, OnInit } from '@angular/core';
import { Galeria6Service, Imagen6 } from '../../servicios/galeria6.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos6',
  templateUrl: './fotos6.component.html',
  styleUrls: ['./fotos6.component.css']
})
export class Fotos6Component implements OnInit {


  fotos6: Imagen6[] = [];
  constructor(private _galeria6Service: Galeria6Service,
    private router: Router) { }

  ngOnInit() {
    this.fotos6 = this._galeria6Service.getFotos6();
  }
  verFoto6( idx: number ) {
    this.router.navigate( ['/foto6', idx] );
  }
}
