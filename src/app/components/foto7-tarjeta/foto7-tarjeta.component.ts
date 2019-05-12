import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto7-tarjeta',
  templateUrl: './foto7-tarjeta.component.html',
  styleUrls: ['./foto7-tarjeta.component.css']
})
export class Foto7TarjetaComponent implements OnInit {

  @Input() foto7: any = {};
  @Input() index: number;

  @Output() foto7Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto7Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto7() {
    // console.log(  this.index );
    this.router.navigate( ['/foto7', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
