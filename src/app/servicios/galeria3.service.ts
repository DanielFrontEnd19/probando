import { Injectable } from '@angular/core';

@Injectable()
export class Galeria3Service {
  private fotos3: Imagen3[] = [
    {
      nombre: 'Battlefront',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Battlefront-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Bodegón rústico',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Bodegónrústico-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'D&G',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/D&G-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'El anillo',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Elanillo-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Happy Buddha',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/HappyBuddha-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Joyas',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Joyas-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Nikon',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Nikon-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Pulsera de plata',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Pulseradeplata-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Reloj',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Reloj-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Schweppes',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Schweppes-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Schweppes',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Schweppes-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Fumar mata',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Fumarmata-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
    {
      nombre: 'Las autoridades sanitarias advierten',
      descripcion: 'string',
      img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Lasautoridadessanitariasadvierten-min.jpg',
      fecha: 'string',
      galeria: 'Fotografía de producto',
    },
  ];

  constructor() { }


getFotos3(): Imagen3[] {
  return this.fotos3;
}

getFoto3( idx: string ) {
  return this.fotos3[idx];
}





}







export interface Imagen3 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
