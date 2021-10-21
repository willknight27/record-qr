import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { EscanearComponent } from './escanear/escanear.component';
import { PerfilComponent } from './perfil/perfil.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AsistenciaComponent,
    EscanearComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    AsistenciaComponent,
    EscanearComponent,
    PerfilComponent
  ]
})
export class ComponentsModule { }
