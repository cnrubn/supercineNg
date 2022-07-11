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
  
  constructor( private cineService: CineService ) { }

  ngOnInit(): void {
  }

  busqueda( event: any ) {

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
        console.log(this.resultados)
      });
      
    }, 350 );
    
  }

}
