import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPelicula } from '../interfaces/IPelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = 'a92319a9ef436d112716f49b16dcd298';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }


  GetArrayPelis = (results): IPelicula[] => {
    return results.map( x => {
      const peli: IPelicula = {
        id: x.id,
        titulo: x.title,
        titulo_original: x.original_title,
        popularidad: x.popularity,
        vote_average: x.vote_average,
        descripcion: x.overview,
        poster_path: x.poster_path,
        backdrop_path: x.backdrop_path
      };
      return peli;
    });
  }

  getMostPopular(): Observable<IPelicula[]> {
    const URL = `${
      this.urlMoviedb
      }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).pipe(
      map(res => {
        return this.GetArrayPelis(res.json().results);
      }));
  }

  getMoviesAreTheatres(): Observable<IPelicula[]>  {
    const DESDE = new Date();
    const HASTA = new Date();
    HASTA.setDate(HASTA.getDate() + 7);

    const DESDESTR = `${DESDE.getFullYear()}-${DESDE.getMonth() + 1}-${DESDE.getDate()}`;
    const HASTASTR = `${HASTA.getFullYear()}-${HASTA.getMonth() + 1}-${HASTA.getDate()}`;

    const URL = `${
      this.urlMoviedb
      }/discover/movie?primary_release_date.gte=${DESDESTR}&primary_release_date.lte=${HASTASTR}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).pipe(
      map(res => {
        return this.GetArrayPelis(res.json().results);
      })
    );
  }

  getMostPopularForKids(): Observable<IPelicula[]>  {
    const URL = `${
      this.urlMoviedb
      }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).pipe(
      map(res => {
        return this.GetArrayPelis(res.json().results);
      })
    );
  }

  buscarPelicula(texto: string) {
    const URL = `${
      this.urlMoviedb
      }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).pipe(
      map(res => {
        return res.json().results;
      })
    );
  }

  ObtenerPelicula(id: string): Observable<IPelicula> {
    const URL = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(URL).pipe(
      map(res => {
        const x = res.json();
        const peli: IPelicula = {
          id: x.id,
          titulo: x.title,
          titulo_original: x.original_title,
          popularidad: x.popularity,
          vote_average: x.vote_average,
          descripcion: x.overview,
          poster_path: x.poster_path,
          backdrop_path: x.backdrop_path,
          frase_celebre: x.tagline

        };
        console.log(x);
        return peli ;
      })
    );
  }

}
