import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { IPelicula } from '../../interfaces/IPelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares: IPelicula[];
  cines: IPelicula[];
  infantiles: IPelicula[];

  constructor(public _srvpelis: PeliculasService) {
    this._srvpelis.getMostPopular()
      .subscribe(response => {
        console.log('pelis mas populares', response);
        this.populares = response;
      });

    this._srvpelis.getMostPopularForKids()
      .subscribe(response => {
        console.log('pelis para niños', response);
        this.infantiles = response;
      });

    this._srvpelis.getMoviesAreTheatres()
      .subscribe(response => {
        console.log('pelis en el cine', response);
        this.cines = response;
      });
  }

  ngOnInit() {
    // console.log('pelis las populares', this._srvpelis.getMostPopular);
  }

}
