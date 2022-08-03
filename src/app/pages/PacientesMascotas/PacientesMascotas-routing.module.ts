import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesMascotasComponent } from './PacientesMascotas.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: PacientesMascotasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesMascotasRoutingModule { }
