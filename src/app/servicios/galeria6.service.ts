import { Injectable } from '@angular/core';

@Injectable()
export class Galeria6Service {

  private fotos6: Imagen6[] = [
    {
      nombre: '40mm',
      descripcion: 'string',
      img: 'assets/img/RETRATO/40mm-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Adrián',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Adrián-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Álex',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Álex-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Ana',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Ana-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Celia',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Celiaa-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Celia',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Celia-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Celia Pink',
      descripcion: 'string',
      img: 'assets/img/RETRATO/CeliaPink-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Estela',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Estela-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Israel',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Israel-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Luna',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Luna-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Luna',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Luna2-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'María',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Maria-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Militar',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Militar-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Monja',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Monja-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Psicodelia',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Psicodelia-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Ramo de flores',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Ramodeflores-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Werlisa',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Werlisa-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Werlisa',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Werlisa2-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Saúl',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Saul-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Juan Carlos Rivas Fraile, crítico del programa "Dias de Cine"',
      descripcion: 'string',
      img: 'assets/img/RETRATO/JuanCarlosRivasFraile,criticodelprogramaDiasdecine-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Irene',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Irene-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
    {
      nombre: 'Israel',
      descripcion: 'string',
      img: 'assets/img/RETRATO/Israel2-min.jpg',
      fecha: 'string',
      galeria: 'Retrato',
    },
  ];

  constructor() { }


getFotos6(): Imagen6[] {
  return this.fotos6;
}

getFoto6( idx: string ) {
  return this.fotos6[idx];
}





}







export interface Imagen6 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
