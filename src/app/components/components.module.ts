import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { EscanearComponent } from './escanear/escanear.component';
import { PerfilComponent } from './perfil/perfil.component';
import { IonicModule } from '@ionic/angular';
import { PopoverUsuarioComponent } from './popover-usuario/popover-usuario.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AsistenciaComponent,
    EscanearComponent,
    PerfilComponent,
    PopoverUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule
  ],
  exports:[
    AsistenciaComponent,
    EscanearComponent,
    PerfilComponent,
    PopoverUsuarioComponent
  ]
})
export class ComponentsModule { }
