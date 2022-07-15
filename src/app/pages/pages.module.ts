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
  ]
})
export class PagesModule { }
