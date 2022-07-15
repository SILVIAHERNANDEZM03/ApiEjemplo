import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todosComponents } from './todos.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: todosComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
