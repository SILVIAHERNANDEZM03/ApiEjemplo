import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponents } from './comments/comments.component';
import { UsersComponent} from './users/users.component';
import { todosComponents} from './todos/todos.component';
import { albumsComponents} from './albums/albums.component';
import {photosComponents} from './photos/photos.component';
import {PersonaComponent} from './Persona/Persona.component';
import { ClientesFamiliaComponent} from './ClientesFamilia/ClientesFamilia.component';
import { RelacionPersonasClientesComponent} from './RelacionPersonasClientes/RelacionPersonasClientes.component';
import { PacientesMascotasComponent} from './PacientesMascotas/PacientesMascotas.component';
import { VacunasComponent} from './Vacunas/Vacunas.component';
import { PesosComponent} from './Pesos/Pesos.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
    UsersComponent,
    todosComponents,
    albumsComponents,
    photosComponents,
    PersonaComponent,
    ClientesFamiliaComponent,
    RelacionPersonasClientesComponent,
    PacientesMascotasComponent,
    VacunasComponent,
    PesosComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
    UsersComponent,
    todosComponents,
    albumsComponents,
    photosComponents,
    PersonaComponent,
    ClientesFamiliaComponent,
    RelacionPersonasClientesComponent,
    PacientesMascotasComponent,
    VacunasComponent,
    PesosComponent,

  ]
})
export class PagesModule { }
