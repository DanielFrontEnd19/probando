import { Injectable } from '@angular/core';

@Injectable()
export class Galeria9Service {

  private fotos9: Imagen9[] = [
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez1-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez2-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez3-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez4-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez5-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez6-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez7-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez8-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez9-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez10-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez11-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    {
      nombre: 'Gema González',
      descripcion: 'string',
      img: 'assets/img/EN_EXTERIOR/GemaGonzalez12-min.jpg',
      fecha: 'string',
      galeria: 'En exterior',
    },
    
  ];

  constructor() { }


getFotos9(): Imagen9[] {
  return this.fotos9;
}

getFoto9( idx: string ) {
  return this.fotos9[idx];
}





}







export interface Imagen9 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}