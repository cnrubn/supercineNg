import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewChildren, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { CineService } from '../../cine.service';
import { FichaCineComponent } from '../../components/ficha-cine/ficha-cine.component';
import { DetallesInterface } from '../../interfaces/detalles-interfaces';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit, DoCheck {

  @Input() _historial!: any;



  // copiaFavs: number[] = [];
  // activo: boolean = false;


  historialLS: DetallesInterface[] = [];

  contadorFav: number = 0;

 


  constructor( private cineService: CineService ) {


    


    
  }

  ngDoCheck(): void {



    //       console.log('listaPelis',this.historialLS.length);

    //       this.contadorFav = this.historialLS.length;
    //       console.log('contadorFav',this.contadorFav);
    




    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    // console.log('listaPelis',this._historial.length);
    // console.log('li',this.historialLS.length);

    if ( this.historialLS.length -1  === this._historial.length ) {
      // console.log('diferencia',this._historial)
      
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


          // console.log('listaPelis',this.historialLS);

          // this.contadorFav = this.historialLS.length;
          // console.log('contadorFav',this.contadorFav);

        })
   
      }

    )
    
  }
  

}
