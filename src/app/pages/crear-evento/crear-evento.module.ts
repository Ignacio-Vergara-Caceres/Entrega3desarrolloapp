import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEventoPageRoutingModule } from './crear-evento-routing.module';

import { CrearEventoPage } from './crear-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearEventoPageRoutingModule
  ],
  declarations: [CrearEventoPage]
})
export class CrearEventoPageModule {}
