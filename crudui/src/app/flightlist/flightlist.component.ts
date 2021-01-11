import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {UserService} from "../services/user.service";
import {User} from "../user";
import {Flight} from "../flight";
import { ReservService } from '../services/reserv.service';
import { Reserv } from '../reserv';


@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css'],
  providers: [UserService],
})
export class FlightlistComponent implements OnInit {
  //, private _route:Route
  constructor(public reservService:ReservService,public userService:UserService, private _service:NgserviceService, private _route:Router) { }

  _usersList: User[];
  _flightList: Flight[];
  _reservist: Reserv[];
 
  _user = new User();
  _valid = 0; 
  //Va a ser igual a el siguiente elemento de la lista de reservas
  ngOnInit(): void {
    this.getUsers();
    this._service.fetchFlightListFromRemote().subscribe(
      data=>{
              console.log("Response received");
              this._flightList=data;
      },
      error=>console.log("Exception ocurred")
    )
  }

  //NOTA: es posible que el arreglo users no devuelva elementos debido a que la lógica es complicada de entender
  getUsers(){
    this.userService.getUsers().subscribe((res) =>{
      this.userService.users = res;
    });
  }

  getReservs(){
    this.reservService.getReservs().subscribe((res) =>{
      this.reservService.reservs = res;
      this._reservist = res;
    })
  }
  //Para hacer las reservas
  reservFlight(idflight:number){
    this.getReservs();
     let _longeservs = 0;
    // if(this._reservist.length != undefined){
    //   _longeservs = this._reservist.length;
    // }else{
    //   _longeservs = 0;
    // }
    
  
    //el id reserva creo que sino se manda nada lo pone automático
    if( _longeservs == 0){
      let _reserv = new Reserv();
      _reserv.idreserv = _longeservs+1;
      _reserv.idflight = idflight;
      _reserv.iduser = this._user.id;
      _reserv.valid = 1;//Debido a que es la primera inserción
            this.reservService.postReserv(_reserv).subscribe(
      data=>
            {
             console.log("data added succesfully");
             //this._route.navigate(['']) ;
            },
            
            error=>console.log("error")
    )
    //this._route.navigate(['']) 
    }else{
      for(let i in this._flightList){
        console.log("idflight"+this._flightList[i]["idflight"]+"idflightINSERTADO"+idflight);
        if(this._flightList[i][idflight] == idflight){
          //if()
          console.log("encontré el vuelo al que le voy a hacer reserva");
        }
      }
    }

    
    this._valid = 0;
    console.log("idflight"+idflight+"iduser"+this._user.id);

    //this._route.navigate(['/addreserv']);
  }


  addUser(){
    this._route.navigate(['adduser']);
  }




  
}
