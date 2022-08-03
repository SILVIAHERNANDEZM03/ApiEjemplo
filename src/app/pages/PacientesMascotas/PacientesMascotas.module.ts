import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesMascotasRoutingModule } from './PacientesMascotas-routing.module';
import { PacientesMascotasComponent } from './PacientesMascotas.component';


@NgModule({
  declarations: [
    PacientesMascotasComponent
  ],
  imports: [
    CommonModule,
    PacientesMascotasRoutingModule
  ]
})
export class PacientesMascotasModule { }
