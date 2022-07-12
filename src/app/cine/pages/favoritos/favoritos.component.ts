import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CineService } from '../../cine.service';
import { DetallesInterface } from '../../interfaces/detalles-interfaces';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  @Input() _historial!: any;

  // copiaFavs: number[] = [];
  // activo: boolean = false;


  historialLS: DetallesInterface[] = [];


  constructor( private cineService: CineService ) {
    // console.log(this.activo)


    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    // this.copiaFavs = this._historial;

    // console.log(this.copiaFavs)



    // CONSTRUCCIÓN ARRAY
    this._historial.forEach(
      (data:any) =>
         

      {

        this.cineService.getPeliPorId( data )
        
        .subscribe( data => {
          this.historialLS.push(data);
          // console.log('historialLS',this.historialLS)

          // this.activo = true;
          // console.log('activo: ',this.activo)


          
        })
        
        
      }
    )


    
  }

  

  ngOnInit(): void {


    
  }

}
