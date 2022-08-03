import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './Pesos.component.html',
  styleUrls: ['./Pesos.component.css']
})
export class PesosComponent implements OnInit {

  Pesos: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.Pesos = this.dataService.getPesos();
  }


}
