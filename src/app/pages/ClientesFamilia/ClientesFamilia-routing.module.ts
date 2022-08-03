import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFamiliaComponent } from './ClientesFamilia.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: ClientesFamiliaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesFamiliaRoutingModule { }
