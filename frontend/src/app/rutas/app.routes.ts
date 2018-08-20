import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { PageInicioComponent } from '../page-inicio/page-inicio.component';
import { PageLoginComponent } from '../page-login/page-login.component';
import { PageRegistroComponent } from '../page-registro/page-registro.component';

const appRoutes: Routes=[
  {
    path:'inicio',
    component: PageInicioComponent
  },
]
export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);
