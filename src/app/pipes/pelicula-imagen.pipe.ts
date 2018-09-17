import { Pipe, PipeTransform } from '@angular/core';
import { IPelicula } from '../interfaces/IPelicula';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: IPelicula, poster: boolean = false): string {
    const url = 'http://image.tmdb.org/t/p/w500';

    // Cuando sea el poster
    if (poster) {
      return url + pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/no-image.gif';
      }
    }

  }

}
