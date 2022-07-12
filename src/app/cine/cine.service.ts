import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusquedaInterface } from './interfaces/busqueda-interfaces';
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

    const url: string = `${this.trendingUrl}/movie/${id}?api_key=${environment.keyApi}&language=es-ES`
    
    return this.http.get<DetallesInterface>( url )
  }

  buscarPeli( termino: string ): Observable<BusquedaInterface> {

    const url: string = `${this.trendingUrl}/search/movie?api_key=85aaca70a36d11ff3618ad70b7761f94&language=es-ES&query=${termino}&page=1&include_adult=false`
    
    return this.http.get<BusquedaInterface>( url );

  }

  

    
  
}
