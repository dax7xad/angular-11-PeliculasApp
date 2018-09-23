import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../../interfaces/IPelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: IPelicula;
  regresarA = '';
  criterio = '';
  constructor(public _srvpelis: PeliculasService, public route: ActivatedRoute) {
      this.route.params
      .subscribe(parametros => {
        console.log('param:', parametros);
        this.regresarA = parametros['pag'];

        if (parametros['criterio']) {
          this.criterio = parametros['criterio'];
        }

        const _idPelicula = parametros['id'];

        this._srvpelis.ObtenerPelicula(_idPelicula)
        .subscribe( pelicula => {
            this.pelicula = pelicula;
        });

      });
  }

  ngOnInit() {
  }

}
