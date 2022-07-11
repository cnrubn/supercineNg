import { Component } from '@angular/core';
import { CineService } from '../../cine.service';
import { Result } from '../../interfaces/cine-interfaces';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {

  trending: Result[] = [];

  constructor( private cineService: CineService ) { 
    this.cineService.getTrending()
      .subscribe( data => {
        this.trending = data.results;
        // console.log( this.trending );
      })
  }
}

