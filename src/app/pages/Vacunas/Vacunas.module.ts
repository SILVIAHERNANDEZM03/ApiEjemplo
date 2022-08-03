import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacunasRoutingModule } from './Vacunas-routing.module';
import { VacunasComponent } from './Vacunas.component';


@NgModule({
  declarations: [
    VacunasComponent
  ],
  imports: [
    CommonModule,
    VacunasRoutingModule
  ]
})
export class VacunasModule { }
