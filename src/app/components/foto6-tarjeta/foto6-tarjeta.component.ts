import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto6-tarjeta',
  templateUrl: './foto6-tarjeta.component.html',
  styleUrls: ['./foto6-tarjeta.component.css']
})
export class Foto6TarjetaComponent implements OnInit {

  @Input() foto6: any = {};
  @Input() index: number;

  @Output() foto6Seleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.foto6Seleccionado = new EventEmitter(); }

  ngOnInit() {
  }
  verFoto6() {
    // console.log(  this.index );
    this.router.navigate( ['/foto6', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }
}