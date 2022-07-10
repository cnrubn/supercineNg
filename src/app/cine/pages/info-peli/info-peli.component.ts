import { Component, Input, OnInit } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result } from '../../interfaces/cine-interfaces';

import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { DetallesInterface } from '../../interfaces/detalles-interfaces';


@Component({
  selector: 'app-info-peli',
  templateUrl: './info-peli.component.html',
  styleUrls: ['./info-peli.component.css']
})
export class InfoPeliComponent implements OnInit {

  peli!: DetallesInterface;


  constructor( private cineService: CineService,
               private activatedRoute: ActivatedRoute, ) {
   }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( params => {
        console.log( params['id'] );

        
        this.cineService.getPeliPorId( params['id'] )
        
          .subscribe( data => {
            this.peli = data;
            console.log(this.peli)
          })
        
      })
    
    
  }


}
