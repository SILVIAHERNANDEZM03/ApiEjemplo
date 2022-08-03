import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './ClientesFamilia.component.html',
  styleUrls: ['./ClientesFamilia.component.css']
})
export class ClientesFamiliaComponent implements OnInit {

  ClientesFamilia: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ClientesFamilia = this.dataService.getClientesFamilia();
  }


}
