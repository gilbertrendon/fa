import { Router } from '@angular/router';
import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {UserService} from "../services/user.service";
import {User} from "../user";
import {Flight} from "../flight";
import { ReservService } from '../services/reserv.service';
import { Reserv } from '../reserv';
import {FilterPipe} from 'src/app/filter.pipe';


@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css'],
  providers: [UserService],
})
export class FlightlistComponent implements OnInit {
  //, private _route:Route
  constructor(public reservService:ReservService,public userService:UserService, private _service:NgserviceService, private _route:Router) { }

  filterPost = '';
  _usersList: User[];
  _flightList: Flight[];
  //_reservist: Reserv[];
 
  _user = new User();
  _valid = 0; 
  //Va a ser igual a el siguiente elemento de la lista de reservas
  ngOnInit(): void {
    this.getUsers();
    this._service.fetchFlightListFromRemote().subscribe(
      data=>{
              //console.log("Response received");
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
    })
  }
  //Para hacer las reservas
  reservFlight(idflight:number,hourinit:String, hourend: String){
    //Debo seleccionar la hora inicio y extraer los dos ultimos caracteres yt convertrlo0sa numero para poder comparar
    this.getReservs();
    let _longeservs;
    if(this.reservService.reservs ==undefined||this.reservService.reservs ==null){
      _longeservs = 0;
    }else{
      console.log(this.reservService.reservs);
      _longeservs = Object.keys(this.reservService.reservs).length;
    }
     console.log("long="+_longeservs);

    if( _longeservs == 0){

      let _reserv = new Reserv();
      _reserv.idreserv = _longeservs+1;
      _reserv.idflight = idflight;
      _reserv.iduser = this._user.id;
      _reserv.valid = 1;
            this.reservService.postReserv(_reserv).subscribe(
      data=>
            {
  
            },
            
            error=>console.log("error")
    )
    }else{
      for(let i in this._flightList){
        console.log("idflight"+this._flightList[i]["idflight"]+"idflightINSERTADO"+idflight);
        if(this._flightList[i]["idflight"] == idflight){
          let shoraini = hourinit.substring(11,12);
          let horaini = Number(shoraini);
          let shorafin = hourend.substring(11,12);
          let horafin = Number(shorafin);
          let shorafinvieja = this._flightList[i]["hourend"].substring(11,12);
          let horafinvieja = Number(shorafinvieja);
          let shorainivieja = this._flightList[i]["hourinit"].substring(11,12);
          let horainivieja = Number(shorainivieja);



          if((horaini<horainivieja&&horafin<horafinvieja&&horaini<horafin&&horainivieja<horafinvieja&&1<2)
          ||(horaini>horafinvieja&&horafin>horainivieja&&horaini<horafin&&horainivieja<horafinvieja&&1<2))
          {
            let _reserv = new Reserv();
            _reserv.idreserv = _longeservs+1;
            _reserv.idflight = idflight;
            _reserv.iduser = this._user.id;
            _reserv.valid = 1;
                  this.reservService.postReserv(_reserv).subscribe(
            data=>
                  {
            
                  },
                  
                  error=>console.log("error")
          )
          }else{
            console.log("Horario no posible");
          }
        }else{
          let _reserv = new Reserv();
          _reserv.idreserv = _longeservs+1;
          _reserv.idflight = idflight;
          _reserv.iduser = this._user.id;
          _reserv.valid = 1;
                this.reservService.postReserv(_reserv).subscribe(
          data=>
                {
          
                },
                
                error=>console.log("error")
        )
        }
      }
    }

  }


  addUser(){
    this._route.navigate(['adduser']);
  }




  
}
