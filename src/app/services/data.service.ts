import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  gettodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  getalbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

  getphotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getPersona() {
    return this.http.get('https://veterinaria.pythonanywhere.com/vet/Persona')
  }

  getClientesFamilia() {
    return this.http.get('https://veterinaria.pythonanywhere.com/vet/ClientesFamilia')
  }
  getRelacionPersonasClientes() {
    return this.http.get('https://veterinaria.pythonanywhere.com/vet/RelacionPersonasClientes')
  }
  getPacientesMascotas() {
    return this.http.get('https://veterinaria.pythonanywhere.com/vet/PacientesMascotas')
  }
  getVacunas() {
  return this.http.get('https://veterinaria.pythonanywhere.com/vet/Vacunas')
  }
  getPesos() {
    return this.http.get('https://veterinaria.pythonanywhere.com/vet/Pesos')
  }

}




