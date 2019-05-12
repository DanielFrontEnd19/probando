import { Injectable } from '@angular/core';

@Injectable()
export class Galeria7Service {

  private fotos7: Imagen7[] = [
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid1-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid2-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid3-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid4-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid5-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid6-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid7-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid8-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid9-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid10-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid11-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid12-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid13-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid14-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
    {
      nombre: 'Cabalgata de Reyes de Madrid',
      descripcion: 'string',
      img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid15-min.jpg',
      fecha: 'string',
      galeria: 'Cabalgata',
    },
  ];

  constructor() { }


getFotos7(): Imagen7[] {
  return this.fotos7;
}

getFoto7( idx: string ) {
  return this.fotos7[idx];
}





}







export interface Imagen7 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
