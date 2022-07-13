import { Component } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result } from '../../interfaces/busqueda-interfaces';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  private debounceTimer?: any;
  resultados: Result[] = [];
  trending: Result[] = [];
  resultadoTrend: Result[] = [];
  historialLS: number[] = [];
  
  constructor( private cineService: CineService ) { }

  
  busqueda( event: any ) {

    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

    const termino: string = event.target.value;

    if ( termino === '' ){
      this.resultadoTrend = [];
      return;
    }
    
    this.debounceTimer = setTimeout(() => {

      this.cineService.buscarPeli( termino )
      .subscribe( data => {
        this.resultados = data.results

        this.resultadoTrend = this.resultados.map( ({ id, title, poster_path }: Result ) => {
          return {
            id,
            title,
            poster_path,
            favCheck: false        
          }

        })

        this.historialLS.forEach( (data) => {
          this.resultadoTrend.forEach( (dataTrend, index) => 
          {

            if ( data === dataTrend.id ) {
              dataTrend.favCheck = true;
            }
          })
        })
        
      });
      
    }, 250 );
    
  }

}
