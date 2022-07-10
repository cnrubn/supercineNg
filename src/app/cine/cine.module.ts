import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CineRoutingModule } from './cine-routing.module';
import { TrendingComponent } from './pages/trending/trending.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { FichaCineComponent } from './components/ficha-cine/ficha-cine.component';


@NgModule({
  declarations: [
    TrendingComponent,
    FavoritosComponent,
    BusquedaComponent,
    FichaCineComponent
  ],
  imports: [
    CommonModule,
    CineRoutingModule
  ]
})
export class CineModule { }
