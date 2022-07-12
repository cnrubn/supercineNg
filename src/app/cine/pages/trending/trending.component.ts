import { Component, Input, OnInit } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result, TrendingInterface } from '../../interfaces/cine-interfaces';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  // @Input() activo!: boolean;
  
  trending: Result[] = [];

  resultadoTrend: Result[] = [];

  historialLS: number[] = [];
  
  

  ngOnInit(): void {


  }

  constructor( private cineService: CineService ) { 

    this.historialLS = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    
    // console.log('histo', this.historialLS );
    

    this.cineService.getTrending()

      .subscribe( data => {
        this.trending = data.results;
 
        this.resultadoTrend = this.trending.map( ({ id, title, poster_path }: Result ) => {
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


        
        

        
        
        // console.log('reTrend',this.resultadoTrend)
        
        
      })




    
  }


}

