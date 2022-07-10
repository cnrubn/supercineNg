import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Trending',
      ruta: '/trending'
    },
    {
      texto: 'Favoritos',
      ruta: '/favoritos'
    },
    {
      texto: 'Búsqueda',
      ruta: '/busqueda'
    },
  ];

}
