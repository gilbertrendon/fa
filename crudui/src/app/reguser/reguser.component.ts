import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-reguser',
  templateUrl: './reguser.component.html',
  styleUrls: ['./reguser.component.css']
})
export class ReguserComponent implements OnInit {
  user = new User();
  constructor(private _route:Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  adduserformsubmit()
  {
    //this.user.registred = 1;
    console.log(this.user.registred);
    this._service.addUserToRemote(this.user).subscribe
    (
      data=>
            {
             console.log("data added succesfully");
             this._route.navigate(['']) ;
            },
            
            error=>console.log("error")
    )
    this._route.navigate(['']) 
  }

}
