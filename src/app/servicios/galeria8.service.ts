import { Injectable } from '@angular/core';

@Injectable()
export class Galeria8Service {

  private fotos8: Imagen8[] = [
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero1-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero2-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero3-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero4-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero5-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero6-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero7-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    {
      nombre: 'Daniel Paunero',
      descripcion: 'string',
      img: 'assets/img/EN_ESTUDIO/DanielPaunero8-min.jpg',
      fecha: 'string',
      galeria: 'En estudio',
    },
    
  ];

  constructor() { }


getFotos8(): Imagen8[] {
  return this.fotos8;
}

getFoto8( idx: string ) {
  return this.fotos8[idx];
}





}







export interface Imagen8 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
