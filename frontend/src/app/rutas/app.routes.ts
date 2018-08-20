import { RouterModule, Routes } from "@angular/router";

import { PageInicioComponent } from '../page-inicio/page-inicio.component';
import { PageLoginComponent } from '../page-login/page-login.component';
import { PageRegistroComponent } from '../page-registro/page-registro.component';
import { PageHomeComponent } from '../page-home/page-home.component';

export const AppRoutes: Routes=[
  {
    path:'home',
    component: PageHomeComponent
  },
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path:'registro',
    component: PageRegistroComponent
  },
  {
    path:'inicio',
    component: PageInicioComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
