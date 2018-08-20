import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppRoutes} from './rutas/app.routes';


import { AppComponent } from './app.component';
import { PageInicioComponent } from './page-inicio/page-inicio.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegistroComponent } from './page-registro/page-registro.component';
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInicioComponent,
    PageLoginComponent,
    PageRegistroComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
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
