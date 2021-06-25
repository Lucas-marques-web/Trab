import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private servicesapiservice:ServiceApiService) { 
    this.read();
  }

  ngOnInit() {
  }

  read(){
    this.servicesapiservice.read().subscribe(data =>{
      console.log(data);
 
    }
      )
  }

}
