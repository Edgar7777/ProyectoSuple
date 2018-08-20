import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageInicioComponent } from './page-inicio/page-inicio.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegistroComponent } from './page-registro/page-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInicioComponent,
    PageLoginComponent,
    PageRegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
