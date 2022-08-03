import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './Persona.component.html',
  styleUrls: ['./Persona.component.css']
})
export class PersonaComponent implements OnInit {

  Persona: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.Persona = this.dataService.getPersona();
  }


}
