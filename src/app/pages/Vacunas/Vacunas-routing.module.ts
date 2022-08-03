import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacunasComponent } from './Vacunas.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: VacunasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacunasRoutingModule { }
