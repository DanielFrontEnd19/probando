import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto10-tarjeta',
  templateUrl: './foto10-tarjeta.component.html',
  styleUrls: ['./foto10-tarjeta.component.css']
})
export class Foto10TarjetaComponent implements OnInit {

  @Input() foto10: any = {};
  @Input() index: number;

  @Output() foto10Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto10Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto10() {
    // console.log(  this.index );
    this.router.navigate( ['/foto10', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
