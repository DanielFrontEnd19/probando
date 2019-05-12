import { Injectable } from '@angular/core';

@Injectable()
export class Galeria10Service {

  private fotos10: Imagen10[] = [
    {
      nombre: 'Cadenas',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Cadenas-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Costaleros',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Costaleros-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Costaleros con la Virgen',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Costalerosconlavirgen-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Crucifixión',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Crucifixión-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Fagot',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Fagot-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Penitente',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Penitente-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Platillos',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Platillos-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Procesión Jesús El Pobre',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/ProcesionJesusElPobre-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Rosario',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Rosario-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Trompa',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Trompa-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Trompetista',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Trompetista-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Tuba',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Tuba-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    {
      nombre: 'Virgen',
      descripcion: 'string',
      img: 'assets/img/SEMANA_SANTA_2017/Virgen-min.jpg',
      fecha: 'string',
      galeria: 'Semana Santa 2017',
    },
    
  ];

  constructor() { }


getFotos10(): Imagen10[] {
  return this.fotos10;
}

getFoto10( idx: string ) {
  return this.fotos10[idx];
}





}







export interface Imagen10 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}