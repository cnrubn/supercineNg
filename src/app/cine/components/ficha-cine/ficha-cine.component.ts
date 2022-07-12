import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { pipe, Subject } from 'rxjs';

import { tap } from 'rxjs/operators';
import { CineService } from '../../cine.service';
import { CanLoad } from '@angular/router';


@Component({
  selector: 'app-ficha-cine',
  templateUrl: './ficha-cine.component.html',
  styleUrls: ['./ficha-cine.component.css']
})
export class FichaCineComponent implements OnInit {

  @Input() ficha!: any;
  @Input() idFav!: any;
  // @Input() idTrend!: any;


  activo: boolean = false;
  // idFav:any;
  
  
  index: number = -1;


  
  
  _historial: string[] = [];
  

  baseUrlImg: string = 'https://image.tmdb.org/t/p/w500'
  

  
  get historial(): string[] {
    return [...this._historial];
  }
  




  constructor(  private cineService: CineService  ) {



  }

  ngOnInit(): void {

    // console.log('idFav',this.idFav);


    
  }
  

  guardarLocalStorage( data: any){


    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];
    

    if( this._historial.length === 0 ) {
      this._historial.push(data.id);
      this.activo = true;

      localStorage.setItem('miArrayCI', JSON.stringify( this._historial));
      return;
    }

    this._historial.forEach(
      dataLS => {

        // console.log('dataLS',dataLS);

        
        if( dataLS === data.id ) {
          this.index = this._historial.indexOf(data.id)


          
          return;
        } 
      }
    )

    // console.log('this.index',this.index);

    
    if ( this.index === -1 ) {
      this._historial.push(data.id);
      this.activo = true;

      // console.log('añade',this._historial);

      
    } else {
      this.activo = false;
      this.idFav = 0;
      this.ficha.favCheck = false;
      this._historial.splice(this.index, 1);
      this.index = -1


      // this._historial.filter(data => console.log('filtro',data));
      // console.log('elimina',this._historial);



    }

    
    localStorage.setItem('miArrayCI', JSON.stringify( this._historial));
    
    
    // console.log(this._historial);




    
    
    
  }




}
