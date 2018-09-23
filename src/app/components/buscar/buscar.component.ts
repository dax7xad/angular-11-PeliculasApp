import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../../interfaces/IPelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  criterio = '';
  peliculas: IPelicula[];

  constructor(public _srvpelis: PeliculasService, public route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      if (parametros['criterio']) {
        this.criterio = parametros['criterio'];
        this.peliculas = this._srvpelis.peliculas;
      }
    });

  }

  ngOnInit() {
  }

  GetPelicula() {

    if (this.criterio === '') {
      return;
    }

    this._srvpelis.buscarPeliculas(this.criterio)
      .subscribe(respose => this.peliculas = respose);

  }
}
