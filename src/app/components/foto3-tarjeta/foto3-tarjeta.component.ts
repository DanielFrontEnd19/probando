import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto3-tarjeta',
  templateUrl: './foto3-tarjeta.component.html',
  styleUrls: ['./foto3-tarjeta.component.css']
})
export class Foto3TarjetaComponent implements OnInit {

  @Input() foto3: any = {};
  @Input() index: number;

  @Output() foto3Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto3Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto3() {
    // console.log(  this.index );
    this.router.navigate( ['/foto3', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}

