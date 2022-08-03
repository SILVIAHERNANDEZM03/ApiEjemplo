import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './RelacionPersonasClientes.component.html',
  styleUrls: ['./RelacionPersonasClientes.component.css']
})
export class RelacionPersonasClientesComponent implements OnInit {

  RelacionPersonasClientes: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.RelacionPersonasClientes = this.dataService.getRelacionPersonasClientes();
  }


}
