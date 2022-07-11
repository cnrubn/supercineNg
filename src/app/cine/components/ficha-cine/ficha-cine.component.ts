import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-ficha-cine',
  templateUrl: './ficha-cine.component.html',
  styleUrls: ['./ficha-cine.component.css']
})
export class FichaCineComponent implements OnInit {

  @Input() ficha!: any;

  
  index: number = -1;


  
  
  _historial: string[] = [];
  

  baseUrlImg: string = 'https://image.tmdb.org/t/p/w500'
  

  
  get historial(): string[] {
    return [...this._historial];
  }
  


  constructor() {



  }

  ngOnInit(): void {


    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];
    


    
  }
  

  guardarLocalStorage( data: any){


    this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];
    

    if( this._historial.length === 0 ) {
      this._historial.push(data.id);
      // this.activo = true;

      localStorage.setItem('miArrayCI', JSON.stringify( this._historial));
      return;
    }

    this._historial.forEach(
      dataLS => {

        if( dataLS === data.id ) {
          this.index = this._historial.indexOf(data.id)
          // console.log('index', this.index); 

          return;
        }
      }
    )

    if ( this.index === -1 ) {
      this._historial.push(data.id);
      // this.activo = true;
    } else {
      this._historial.splice(this.index, 1);
    }

    localStorage.setItem('miArrayCI', JSON.stringify( this._historial));
    
    // console.log(this.activo);

  }



}
