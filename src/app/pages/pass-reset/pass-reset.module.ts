import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassResetPageRoutingModule } from './pass-reset-routing.module';

import { PassResetPage } from './pass-reset.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassResetPageRoutingModule,
    MaterialModule
  ],
  declarations: [PassResetPage]
})
export class PassResetPageModule {}
