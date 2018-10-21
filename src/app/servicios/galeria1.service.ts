
import { Injectable } from '@angular/core';

@Injectable()
export class Galeria1Service {

  private heroes: Imagen1[] = [
    {
      nombre: 'Mesa de sonido',
      descripcion: 'string',
      img: 'assets/img/BEHIND-THE-SCENES/MesadeSonido-min.jpg',
      fecha: 'string',
      galeria: 'Behind the scenes',
    },
    {
      nombre: 'Perfil Presentadores',
      descripcion: 'string',
      img: 'assets/img/BEHIND-THE-SCENES/PerfilPresentadores-min.jpg',
      fecha: 'string',
      galeria: 'Behind the scenes',
    },
    {
      nombre: 'Plató de televisión',
      descripcion: 'string',
      img: 'assets/img/BEHIND-THE-SCENES/Platódetelevisión-min.jpg',
      fecha: 'string',
      galeria: 'Behind the scenes',
    },
    {
      nombre: 'Presentadores',
      descripcion: 'string',
      img: 'assets/img/BEHIND-THE-SCENES/Presentadores-min.jpg',
      fecha: 'string',
      galeria: 'Behind the scenes',
    },
    {
      nombre: 'Regidora y Foto fija',
      descripcion: 'string',
      img: 'assets/img/BEHIND-THE-SCENES/RegidorayFotofija-min.jpg',
      fecha: 'string',
      galeria: 'Behind the scenes',
    },
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }


  getHeroes(): Imagen1[] {
    return this.heroes;
  }

  getHeroe( idx: string ) {
    return this.heroes[idx];
  }

  buscarHeroes( termino: string ): Imagen1[] {

    const heroesArr: Imagen1[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.heroes.length; i ++ ) {

      const heroe = this.heroes[i];

      const nombre = heroe.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0  ) {
        heroe.idx = i;
        heroesArr.push( heroe );
      }

    }

    return heroesArr;

  }


}


export interface Imagen1 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
