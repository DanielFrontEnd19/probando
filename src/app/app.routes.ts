
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Fotos2Component } from './components/fotos2/fotos2.component';
import { Foto2Component } from './components/foto2/foto2.component';
import { Foto3Component } from './components/foto3/foto3.component';
import { Fotos3Component } from './components/fotos3/fotos3.component';
import { Foto6Component } from './components/foto6/foto6.component';
import { Fotos6Component } from './components/fotos6/fotos6.component';
import { Foto5Component } from './components/foto5/foto5.component';
import { Fotos5Component } from './components/fotos5/fotos5.component';
import { Foto4Component } from './components/foto4/foto4.component';
import { Fotos4Component } from './components/fotos4/fotos4.component';
import { Videos1Component } from './components/videos1/videos1.component';
import { Videos2Component } from './components/videos2/videos2.component';
import { Videos3Component } from './components/videos3/videos3.component';
import { Videos4Component } from './components/videos4/videos4.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'fotos2', component: Fotos2Component },
  { path: 'foto2/:id', component: Foto2Component },
  { path: 'fotos3', component: Fotos3Component },
  { path: 'foto3/:id', component: Foto3Component },
  { path: 'fotos4', component: Fotos4Component },
  { path: 'foto4/:id', component: Foto4Component },
  { path: 'fotos5', component: Fotos5Component },
  { path: 'foto5/:id', component: Foto5Component },
  { path: 'fotos6', component: Fotos6Component },
  { path: 'foto6/:id', component: Foto6Component },
  { path: 'videos1', component: Videos1Component },
  { path: 'videos2', component: Videos2Component },
  { path: 'videos3', component: Videos3Component },
  { path: 'videos4', component: Videos4Component },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
