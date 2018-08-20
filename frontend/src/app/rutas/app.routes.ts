import { RouterModule, Routes } from "@angular/router";

import { PageInicioComponent } from '../page-inicio/page-inicio.component';
import { PageLoginComponent } from '../page-login/page-login.component';
import { PageRegistroComponent } from '../page-registro/page-registro.component';
import { PageHomeComponent } from '../page-home/page-home.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { LaserComponent } from '../laser/laser.component';
import { AlarmaComponent } from '../alarma/alarma.component';
import { LugarComponent } from '../lugar/lugar.component';
import { SeccionComponent } from '../seccion/seccion.component';
import { AgregarLaserComponent } from '../agregar-laser/agregar-laser.component';

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
    component: PageInicioComponent,
    children: [
      {
        path: '',
        component: PageInicioComponent,
      },
      {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children:[
          {
            path: 'laser',
            component: AgregarLaserComponent,
          },
          {
            path: 'laser/:id',
            component: LaserComponent,
            children:[
              {
                path: 'alarma',
                component: AlarmaComponent
              },
              {
                path: 'lugar',
                component: LugarComponent,
                children:[
                  {
                    path: 'seccion',
                    component: SeccionComponent,
                  }
                ]
              }
            ]
          }
        ],
      }
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
