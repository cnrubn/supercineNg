import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, TrendingInterface } from './interfaces/cine-interfaces';
import { DetallesInterface } from './interfaces/detalles-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  private trendingUrl: string = 'https://api.themoviedb.org/3'

  constructor( private http: HttpClient ) {}

  getTrending(): Observable<TrendingInterface> {

    const url: string = `${this.trendingUrl}/trending/movie/day?api_key=${environment.keyApi}`;

    return this.http.get<TrendingInterface>( url );
  }

  getPeliPorId( id: number ): Observable<DetallesInterface> {
    return this.http.get<DetallesInterface>(`${this.trendingUrl}/movie/${id}?api_key=${environment.keyApi}&language=es-ES`)
  }
    
  
}
