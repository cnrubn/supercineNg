import { Component, Input, OnInit } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result } from '../../interfaces/cine-interfaces';

import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { DetallesInterface, Genre } from '../../interfaces/detalles-interfaces';


@Component({
  selector: 'app-info-peli',
  templateUrl: './info-peli.component.html',
  styleUrls: ['./info-peli.component.css']
})
export class InfoPeliComponent implements OnInit {

  peli!: DetallesInterface;
  generos:any;
  baseUrlImg: string = 'https://image.tmdb.org/t/p/w500';

  @Input() _historial!: any;


  constructor( private cineService: CineService,
               private activatedRoute: ActivatedRoute,
               private router: Router  ) {
   }

  ngOnInit(): void {

    // this._historial = JSON.parse(localStorage.getItem('miArrayCI')!) || [];

    console.log('historial',this._historial);

    this.activatedRoute.params
      .subscribe( params => {
        console.log( params['id'] );

        
        this.cineService.getPeliPorId( params['id'] )
        
          .subscribe( data => {
            this.peli = data;
            // console.log('peli: ',this.peli);

            this.generos = this.peli.genres;
            // console.log('peli2: ',this.generos)

          })
        
      })
    
    
  }



  // goBack() {
  //   this.router.navigate(['/favoritos']);
  // }
  
  
  
}
