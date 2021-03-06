import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { Galeria1Service } from './servicios/galeria1.service';
import { Galeria2Service } from './servicios/galeria2.service';
import { Galeria3Service } from './servicios/galeria3.service';
import { Galeria4Service } from './servicios/galeria4.service';
import { Galeria5Service } from './servicios/galeria5.service';
import { Galeria6Service } from './servicios/galeria6.service';
import { Galeria7Service } from './servicios/galeria7.service';
import { Galeria8Service } from './servicios/galeria8.service';
import { Galeria9Service } from './servicios/galeria9.service';
import { Galeria10Service } from './servicios/galeria10.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Fotos2Component } from './components/fotos2/fotos2.component';
import { Foto2TarjetaComponent } from './components/foto2-tarjeta/foto2-tarjeta.component';
import { Foto2Component } from './components/foto2/foto2.component';
import { Foto3Component } from './components/foto3/foto3.component';
import { Foto3TarjetaComponent } from './components/foto3-tarjeta/foto3-tarjeta.component';
import { Fotos3Component } from './components/fotos3/fotos3.component';
import { Fotos4Component } from './components/fotos4/fotos4.component';
import { Foto4TarjetaComponent } from './components/foto4-tarjeta/foto4-tarjeta.component';
import { Foto4Component } from './components/foto4/foto4.component';
import { Foto5Component } from './components/foto5/foto5.component';
import { Foto6Component } from './components/foto6/foto6.component';
import { Foto5TarjetaComponent } from './components/foto5-tarjeta/foto5-tarjeta.component';
import { Foto6TarjetaComponent } from './components/foto6-tarjeta/foto6-tarjeta.component';
import { Fotos5Component } from './components/fotos5/fotos5.component';
import { Fotos6Component } from './components/fotos6/fotos6.component';
import { Videos1Component } from './components/videos1/videos1.component';
import { Videos2Component } from './components/videos2/videos2.component';
import { Videos3Component } from './components/videos3/videos3.component';
import { Videos4Component } from './components/videos4/videos4.component';
import { Videos5Component } from './components/videos5/videos5.component';
import { Videos6Component } from './components/videos6/videos6.component';
import { MontionComponent } from './components/montion/montion.component';
import { Foto7Component } from './components/foto7/foto7.component';
import { Foto7TarjetaComponent } from './components/foto7-tarjeta/foto7-tarjeta.component';
import { Fotos7Component } from './components/fotos7/fotos7.component';
import { Fotos8Component } from './components/fotos8/fotos8.component';
import { Foto8TarjetaComponent } from './components/foto8-tarjeta/foto8-tarjeta.component';
import { Foto8Component } from './components/foto8/foto8.component';
import { Foto9Component } from './components/foto9/foto9.component';
import { Foto9TarjetaComponent } from './components/foto9-tarjeta/foto9-tarjeta.component';
import { Fotos9Component } from './components/fotos9/fotos9.component';
import { Fotos10Component } from './components/fotos10/fotos10.component';
import { Foto10TarjetaComponent } from './components/foto10-tarjeta/foto10-tarjeta.component';
import { Foto10Component } from './components/foto10/foto10.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    FooterComponent,
    Fotos2Component,
    Foto2TarjetaComponent,
    Foto2Component,
    Foto3Component,
    Foto3TarjetaComponent,
    Fotos3Component,
    Fotos4Component,
    Foto4TarjetaComponent,
    Foto4Component,
    Foto5Component,
    Foto6Component,
    Foto5TarjetaComponent,
    Foto6TarjetaComponent,
    Fotos5Component,
    Fotos6Component,
    Videos1Component,
    Videos2Component,
    Videos3Component,
    Videos4Component,
    MontionComponent,
    Foto7Component,
    Foto7TarjetaComponent,
    Fotos7Component,
    Fotos8Component,
    Foto8TarjetaComponent,
    Foto8Component,
    Foto9Component,
    Foto9TarjetaComponent,
    Fotos9Component,
    Fotos10Component,
    Foto10TarjetaComponent,
    Foto10Component,
    Videos5Component,
    Videos6Component,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    Galeria1Service,
    Galeria2Service,
    Galeria3Service,
    Galeria4Service,
    Galeria5Service,
    Galeria6Service,
    Galeria7Service,
    Galeria8Service,
    Galeria9Service,
    Galeria10Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
