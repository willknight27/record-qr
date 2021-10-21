import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaComponent } from 'src/app/components/asistencia/asistencia.component';
import { EscanearComponent } from 'src/app/components/escanear/escanear.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'escanear',
        component: EscanearComponent
      },
      {
        path: 'asistencia',
        component: AsistenciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
