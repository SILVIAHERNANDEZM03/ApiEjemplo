import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './Persona-routing.module';
import { PersonaComponent } from './Persona.component';


@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
