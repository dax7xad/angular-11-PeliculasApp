import { Component, OnInit, Input } from '@angular/core';
import { IPelicula } from '../../interfaces/IPelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styles: []
})
export class PosterComponent implements OnInit {



  @Input('pelicula') pelicula: IPelicula;
  constructor(public router: Router) { }

  ngOnInit() {

  }

}
