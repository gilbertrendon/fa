import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Reserv} from './reserv';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchFlightListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8088/getflightlist/");
  }
    
  addReservToRemote( reserv: Reserv):Observable<any>{
    return this._http.post<any>("http://localhost:8088/addreserv", reserv);
  }

  addUserToRemote( user:User):Observable<any>{
    console.log(user);
    return this._http.post<any>("http://localhost:8088/adduser", user);
  }
}
