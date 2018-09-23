import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../../services/peliculas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  criterio = '';
  constructor(private router: Router, public _srvpelis: PeliculasService) { }

  ngOnInit() {
  }
  fnBuscar() {
    if (this.criterio.length === 0) {
      return false;
    }
    this._srvpelis.buscarPeliculas(this.criterio).subscribe(
      (response) =>  this.router.navigate(['/buscar', this.criterio])
    );

  }

}
