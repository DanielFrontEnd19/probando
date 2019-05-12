import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto8-tarjeta',
  templateUrl: './foto8-tarjeta.component.html',
  styleUrls: ['./foto8-tarjeta.component.css']
})
export class Foto8TarjetaComponent implements OnInit {

  @Input() foto8: any = {};
  @Input() index: number;

  @Output() foto8Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto8Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto8() {
    // console.log(  this.index );
    this.router.navigate( ['/foto8', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
