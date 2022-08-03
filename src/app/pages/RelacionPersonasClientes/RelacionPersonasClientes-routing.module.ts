import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelacionPersonasClientesComponent } from './RelacionPersonasClientes.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: RelacionPersonasClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelacionPersonasClientesRoutingModule { }
