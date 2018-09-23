import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

// componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PosterComponent } from './components/home/poster.component';

import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
// Rutas
import { APP_ROUTING } from './app.routes';
import { GaleriaComponent } from './components/home/galeria.component';

// Proveedores y Servicios
import { HttpModule, JsonpModule } from '@angular/http';
import { PeliculasService } from './services/peliculas.service';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { PosterDestacadoPipe } from './pipes/poster-destacado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaComponent,
    PosterComponent,
    PeliculaImagenPipe,
    PosterDestacadoPipe,
    PeliculaComponent,
    BuscarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
