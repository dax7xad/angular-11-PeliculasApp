import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { GaleriaComponent } from './components/home/galeria.component';

// Proveedores y Servicios
import { HttpModule, JsonpModule } from '@angular/http';
import { PeliculasService } from './services/peliculas.service';
import { PosterComponent } from './components/home/poster.component';
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
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    JsonpModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
