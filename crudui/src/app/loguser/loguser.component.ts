import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-loguser',
  templateUrl: './loguser.component.html',
  styleUrls: ['./loguser.component.css']
})
export class LoguserComponent implements OnInit {

  constructor(public userService:UserService, private _route:Router) { }

  _userList : User[];
  user = new User();
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data=>{
              console.log("Response received");
              this._userList=data;
      },
      error=>console.log("Exception ocurred")
    )
  }

  goToFlightList(){
    this._route.navigate(['viewflightlist']);
  }

  goToRegister(){
    this._route.navigate(['reguser']);
  }

  validatelog(){
   
    for(let i in this._userList){
      console.log(this._userList[i]["name"]+""+this.user["name"]);
      console.log(this._userList[i]["id"]+""+this.user["id"]);
      
      if((this._userList[i]["id"] == this.user["id"]) && (this._userList[i]["name"] == this.user["name"])){
        this._route.navigate(['viewflightlist']);
      }else{
        console.log("usuario o contraseña incorrecta(s)");
      }
    } 
    
    
    //if((i["cityinit"] == cityinitinsertbyuser)&&(i["cityend"] == cityfinalinsertbyuser){
//	vuelosconhorariosproisblesentredestinos.add(i)
//}



    
  }


}
