import { RouterModule, Routes } from "@angular/router";

import { PageInicioComponent } from '../page-inicio/page-inicio.component';
import { PageLoginComponent } from '../page-login/page-login.component';
import { PageRegistroComponent } from '../page-registro/page-registro.component';

export const AppRoutes: Routes=[
  {
    path:'inicio',
    component: PageInicioComponent
  },
]
