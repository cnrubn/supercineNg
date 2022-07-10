import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, TrendingInterface } from './interfaces/cine-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  private trendingUrl: string = 'https://api.themoviedb.org/3/trending/movie/day?api_key='

  constructor( private http: HttpClient ) {}

  getTrending(): Observable<TrendingInterface> {
    const url: string = this.trendingUrl+environment.keyApi;

    return this.http.get<TrendingInterface>( url );
  }
    
  
}
