import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgserviceService } from './ngservice.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public userService:UserService, private _service:NgserviceService, private _route:Router){}
  //title = 'crudui';
  ngOnInit(): void{
                    this._service.fetchFlightListFromRemote().subscribe(
                      data=>console.log("response recieved"),
                      error=>console.log("exception ocurred")  
                    )
                  }

  goToFlightList(){
    this._route.navigate(['viewflightlist']);
  }



}
