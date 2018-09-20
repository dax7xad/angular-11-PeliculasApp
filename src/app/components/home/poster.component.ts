import { Component, OnInit, Input } from '@angular/core';
import { IPelicula } from '../../interfaces/IPelicula';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styles: []
})
export class PosterComponent implements OnInit {



  @Input('pelicula') pelicula: IPelicula;
  constructor() { }

  ngOnInit() {

  }

}
