import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesFamiliaRoutingModule } from './ClientesFamilia-routing.module';
import { ClientesFamiliaComponent } from './ClientesFamilia.component';


@NgModule({
  declarations: [
    ClientesFamiliaComponent
  ],
  imports: [
    CommonModule,
    ClientesFamiliaRoutingModule
  ]
})
export class ClientesFamiliaModule { }
