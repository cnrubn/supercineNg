import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CineService } from '../../cine.service';
import { DetallesInterface } from '../../interfaces/detalles-interfaces';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit, DoCheck {

  @Input() _historial!: any;


  historialLS: DetallesInterface[] = [];
  contadorFav: number = 0;


  constructor( private cineService: CineService ) {}

  ngDoCheck(): void {

    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    if ( this.historialLS.length -1  === this._historial.length ) {
      
      this.ngOnInit();
      this.historialLS = [];
    }

  }


  ngOnInit(): void {

    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    // CONSTRUCCIÓN ARRAY
    this._historial.forEach(
      (data:any) => {

        this.cineService.getPeliPorId( data )
        
        .subscribe( data => {
          this.historialLS.push(data);

        })
   
      }

    )
    
  }
  

}
