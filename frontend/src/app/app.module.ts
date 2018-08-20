import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AppRoutes} from './rutas/app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { PageInicioComponent } from './page-inicio/page-inicio.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegistroComponent } from './page-registro/page-registro.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LaserComponent } from './laser/laser.component';
import { AlarmaComponent } from './alarma/alarma.component';
import { LugarComponent } from './lugar/lugar.component';
import { SeccionComponent } from './seccion/seccion.component';
import { AgregarLaserComponent } from './agregar-laser/agregar-laser.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInicioComponent,
    PageLoginComponent,
    PageRegistroComponent,
    PageHomeComponent,
    CarouselComponent,
    UsuarioComponent,
    LaserComponent,
    AlarmaComponent,
    LugarComponent,
    SeccionComponent,
    AgregarLaserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
     MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      AppRoutes,
      {
        useHash:true
      }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
