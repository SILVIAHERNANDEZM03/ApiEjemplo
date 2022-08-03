import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './Vacunas.component.html',
  styleUrls: ['./Vacunas.component.css']
})
export class VacunasComponent implements OnInit {

  Vacunas: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.Vacunas = this.dataService.getVacunas();
  }


}
