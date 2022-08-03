import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelacionPersonasClientesRoutingModule } from './RelacionPersonasClientes-routing.module';
import { RelacionPersonasClientesComponent } from './RelacionPersonasClientes.component';


@NgModule({
  declarations: [
    RelacionPersonasClientesComponent
  ],
  imports: [
    CommonModule,
    RelacionPersonasClientesRoutingModule
  ]
})
export class RelacionPersonasClientesModule { }
