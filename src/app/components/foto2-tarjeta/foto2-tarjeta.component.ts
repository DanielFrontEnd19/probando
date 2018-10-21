import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foto2-tarjeta',
  templateUrl: './foto2-tarjeta.component.html',
  styleUrls: ['./foto2-tarjeta.component.css']
})
export class Foto2TarjetaComponent implements OnInit {
  @Input() foto2: any = {};
  @Input() index: number;

  @Output() foto2Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto2Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto2() {
    // console.log(  this.index );
    this.router.navigate( ['/foto2', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
