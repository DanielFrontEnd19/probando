import { Injectable } from '@angular/core';

@Injectable()
export class Galeria5Service {

  private fotos5: Imagen5[] = [
    {
      nombre: 'Basílica San Francisco el Grande',
      descripcion: 'string',
      img: 'assets/img/MADRID/BasílicaSanFranciscoelGrande-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Bolsa de Madrid',
      descripcion: 'string',
      img: 'assets/img/MADRID/BolsadeMadrid-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Burbuja',
      descripcion: 'string',
      img: 'assets/img/MADRID/Burbuja-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Camino Ascendente',
      descripcion: 'string',
      img: 'assets/img/MADRID/CaminoAscendente-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Campo del Moro',
      descripcion: 'string',
      img: 'assets/img/MADRID/CampodelMoro-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Canasta del Mercado de la Cebada',
      descripcion: 'string',
      img: 'assets/img/MADRID/CanastadelMercadodelaCebada-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Centro Cultural Conde Duque',
      descripcion: 'string',
      img: 'assets/img/MADRID/CentroCulturalCondeDuque-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Contrapicado Catedral de la Almudena',
      descripcion: 'string',
      img: 'assets/img/MADRID/ContrapicadoCatedraldelaAlmudena-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Estación de Príncipe Pío',
      descripcion: 'string',
      img: 'assets/img/MADRID/EstacióndePríncipePío-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Flores',
      descripcion: 'string',
      img: 'assets/img/MADRID/Flores-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Frontal Catedral de la Almudena',
      descripcion: 'string',
      img: 'assets/img/MADRID/FrontalCatedraldelaAlmudena-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Jardín Botánico',
      descripcion: 'string',
      img: 'assets/img/MADRID/JardínBotánico-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'La Almudena',
      descripcion: 'string',
      img: 'assets/img/MADRID/LaAlmudena-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'La Linde',
      descripcion: 'string',
      img: 'assets/img/MADRID/LaLinde-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Ministerio de Agricultura',
      descripcion: 'string',
      img: 'assets/img/MADRID/MinisteriodeAgricultura-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Museo del Prado',
      descripcion: 'string',
      img: 'assets/img/MADRID/MuseodelPrado-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Músicos',
      descripcion: 'string',
      img: 'assets/img/MADRID/Músicos-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Naturaleza en Campo del Moro',
      descripcion: 'string',
      img: 'assets/img/MADRID/NaturalezaenCampodelMoro-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Palacio Real',
      descripcion: 'string',
      img: 'assets/img/MADRID/PalacioReal-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Palacio Real con marco',
      descripcion: 'string',
      img: 'assets/img/MADRID/PalacioRealconmarco-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Pinturas Urbanas',
      descripcion: 'string',
      img: 'assets/img/MADRID/Pinturasurbanas-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Puerta de Alcalá',
      descripcion: 'string',
      img: 'assets/img/MADRID/PuertadeAlcalá-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Real Casa de Correos',
      descripcion: 'string',
      img: 'assets/img/MADRID/RealCasadeCorreos-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Sierra de Madrid',
      descripcion: 'string',
      img: 'assets/img/MADRID/SierradeMadrid-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Templo de Debod',
      descripcion: 'string',
      img: 'assets/img/MADRID/TemplodeDebod-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'WithoutFace',
      descripcion: 'string',
      img: 'assets/img/MADRID/WithoutFace-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Pantalones de colores',
      descripcion: 'string',
      img: 'assets/img/MADRID/Pantalonesdecolores-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Pastelería',
      descripcion: 'string',
      img: 'assets/img/MADRID/Pasteleria-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Skate Park',
      descripcion: 'string',
      img: 'assets/img/MADRID/SkatePark-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Campo de la Cebada',
      descripcion: 'string',
      img: 'assets/img/MADRID/Campodecebada-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Gato callejero',
      descripcion: 'string',
      img: 'assets/img/MADRID/Gatocallejero-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
    {
      nombre: 'Gato callejero II',
      descripcion: 'string',
      img: 'assets/img/MADRID/Gatocallejero2-min.jpg',
      fecha: 'string',
      galeria: 'Madrid',
    },
  ];

  constructor() { }


getFotos5(): Imagen5[] {
  return this.fotos5;
}

getFoto5( idx: string ) {
  return this.fotos5[idx];
}





}







export interface Imagen5 {
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  galeria: string;
  idx?: number;
}
