import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

}
