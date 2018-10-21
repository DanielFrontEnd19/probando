import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto5-tarjeta',
  templateUrl: './foto5-tarjeta.component.html',
  styleUrls: ['./foto5-tarjeta.component.css']
})
export class Foto5TarjetaComponent implements OnInit {

  @Input() foto5: any = {};
  @Input() index: number;

  @Output() foto5Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto5Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto5() {
    // console.log(  this.index );
    this.router.navigate( ['/foto5', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}

