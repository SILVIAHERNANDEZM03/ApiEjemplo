import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './PacientesMascotas.component.html',
  styleUrls: ['./PacientesMascotas.component.css']
})
export class PacientesMascotasComponent implements OnInit {

  PacientesMascotas: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.PacientesMascotas = this.dataService.getPacientesMascotas();
  }


}
