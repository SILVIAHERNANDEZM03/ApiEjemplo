import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
    {
      name: 'Posts',
      path: 'posts'
    },
    {
      name: 'Comments',
      path: '/comments'
    },
    {
      name: 'Users',
      path: '/users'
    },
    {
      name: 'todos',
      path: '/todos'
    },
    {
      name: 'albums',
      path: '/albums'
    },
    {
      name: 'photos',
      path: '/photos'
    },
    {
      name: 'Persona',
      path: '/Persona'
    },
    {
      name: 'ClientesFamilia',
      path: '/ClientesFamilia'
    },
    {
      name: 'RelacionPersonasClientes',
      path: '/RelacionPersonasClientes'
    },
    {
      name: 'PacientesMascotas',
      path: '/PacientesMascotas'
    },
    {
      name: 'Vacunas',
      path: '/Vacunas'
    },
    {
      name: 'Pesos',
      path: '/Pesos'
    }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
