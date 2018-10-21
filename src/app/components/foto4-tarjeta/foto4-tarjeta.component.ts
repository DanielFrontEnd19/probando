import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto4-tarjeta',
  templateUrl: './foto4-tarjeta.component.html',
  styleUrls: ['./foto4-tarjeta.component.css']
})
export class Foto4TarjetaComponent implements OnInit {

  @Input() foto4: any = {};
  @Input() index: number;

  @Output() foto4Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto4Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto4() {
    // console.log(  this.index );
    this.router.navigate( ['/foto4', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}

