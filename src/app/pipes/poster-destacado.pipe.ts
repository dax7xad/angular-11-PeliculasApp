import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterDestacado',

})
export class PosterDestacadoPipe implements PipeTransform {

  transform(peliculas: any[], reverse: boolean): any {
    console.log('pelicuas desde el pipe', peliculas);
    // return null;

    if (!peliculas) {
      return null;
    }

    if (!reverse) {
      return peliculas.map((x, index) => {
        x.principal = (index === 0) ? true : false ;
        return x;
      });
    } else {
      return peliculas.reverse().map((x, index) => {
        x.principal = (index === 0) ? true : false ;
        return x;
      }).reverse();
    }
  }
}
