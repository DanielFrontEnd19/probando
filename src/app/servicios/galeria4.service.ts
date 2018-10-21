import { Injectable } from '@angular/core';

@Injectable()
export class Galeria4Service {

  private fotos4: Imagen4[] = [
    {
      nombre: 'El Matadero',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/ElMatadero-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Estación de Príncipe Pío',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/EstacióndePríncipePío-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Galería de Cristal del Palacio de Cibeles',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/GaleríadeCristaldelPalaciodeCibeles-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Invernadero del Palacio de Cristal de Arganzuela',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/InvernaderodelPalaciodeCristaldeArganzuela-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Invernadero del Palacio de Cristal de Arganzuela2',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/InvernaderodelPalaciodeCristaldeArganzuela2-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Museo Británico de Londres',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/MuseoBritánicodeLondres-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
    {
      nombre: 'Panteón de Agripa Roma',
      descripcion: 'string',
      img: 'assets/img/INTERIORISMO/PanteóndeAgripaRoma-min.jpg',
      fecha: 'string',
      galeria: 'Interiorismo',
    },
  ];

  constructor() { }


getFotos4(): Imagen4[] {
  return this.fotos4;
}

getFoto4( idx: string ) {
  return this.fotos4[idx];
}





}







export interface Imagen4 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
