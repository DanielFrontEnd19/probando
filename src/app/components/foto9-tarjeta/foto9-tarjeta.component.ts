import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto9-tarjeta',
  templateUrl: './foto9-tarjeta.component.html',
  styleUrls: ['./foto9-tarjeta.component.css']
})
export class Foto9TarjetaComponent implements OnInit {

  @Input() foto9: any = {};
  @Input() index: number;

  @Output() foto9Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto9Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto9() {
    // console.log(  this.index );
    this.router.navigate( ['/foto9', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}

