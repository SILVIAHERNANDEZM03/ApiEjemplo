import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesosRoutingModule } from './Pesos-routing.module';
import { PesosComponent } from './Pesos.component';


@NgModule({
  declarations: [
    PesosComponent
  ],
  imports: [
    CommonModule,
    PesosRoutingModule
  ]
})
export class PesosModule { }
