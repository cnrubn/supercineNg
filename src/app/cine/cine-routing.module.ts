import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { TrendingComponent } from './pages/trending/trending.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'trending', component: TrendingComponent},
      {path: 'favoritos', component: FavoritosComponent},
      {path: 'busqueda', component: BusquedaComponent},
      {path: '**', redirectTo: 'trending'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CineRoutingModule { }