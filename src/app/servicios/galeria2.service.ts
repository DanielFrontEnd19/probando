import { Injectable } from '@angular/core';


@Injectable()
export class Galeria2Service {

  private fotos2: Imagen2[] = [
    {
      nombre: 'Autobús amarillo',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Autobúsamarillo-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Bridge George IV',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/BridgeGeorgeIV-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Calle con curva',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Calleconcurva-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Callejón',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Callejón-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Castillo de Edimburgo',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/CastillodeEdimburgo-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Edinburgh Antifascists',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/EdinburghAntifascists-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Escultura David Hume',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/EsculturaDavidHume-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Greyfriars',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Greyfriars-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Las rejas de Escocia',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/LasrejasdeEscocia-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Mirador Arthurs seat',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/MiradorArthursseat-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Museo Nacional de Escocia',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/MuseoNacionaldeEscocia-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Nubes y flores amarillas',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Nubesyfloresamarillas-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Paseo por Edimburgo',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/PaseoporEdimburgo-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Puente',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/Puente-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Puerta del Castillo de Edimburgo',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/PuertadelCastillodeEdimburgo-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Scotish Man',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/ScotishMan-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
    {
      nombre: 'Tumba de David Hume',
      descripcion: 'string',
      img: 'assets/img/EDIMBURGO/TumbadeDavidHume-min.jpg',
      fecha: 'string',
      galeria: 'Edimburgo',
    },
  ];

  constructor() { }


getFotos2(): Imagen2[] {
  return this.fotos2;
}

getFoto2( idx: string ) {
  return this.fotos2[idx];
}





}







export interface Imagen2 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
