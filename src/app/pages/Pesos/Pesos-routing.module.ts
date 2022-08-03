import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesosComponent } from './Pesos.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: PesosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesosRoutingModule { }
