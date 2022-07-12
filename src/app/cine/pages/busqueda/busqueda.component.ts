import { Component, Input, OnInit } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result } from '../../interfaces/busqueda-interfaces';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  private debounceTimer?: any;
  resultados: Result[] = [];

  trending: Result[] = [];

  resultadoTrend: Result[] = [];

  historialLS: number[] = [];
  
  constructor( private cineService: CineService ) { }

  ngOnInit(): void {
  }

  busqueda( event: any ) {

    this.historialLS = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    
    // console.log('histo', this.historialLS );
    

    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

    const termino: string = event.target.value;

    if ( termino === '' ){
      this.resultados = [];
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
              // console.log('son iguales',dataTrend.id, data);

              dataTrend.favCheck = true;
              
              // console.log('posición', dataTrend);

            }
            
            // console.log('id',dataTrend.id)
          })
          // console.log('LS',data);
        })
        
        
        // console.log(this.resultados)
      });
      
    }, 350 );
    
  }

}
