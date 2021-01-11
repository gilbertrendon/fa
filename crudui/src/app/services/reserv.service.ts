import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Reserv } from "../reserv";

@Injectable({
  providedIn: "root",
})
export class ReservService {
  selectedReserv: Reserv;
  reservs: Reserv[];
  readonly URL_API = "http://localhost:8088/fetchreservlist";
  readonly URL_API2 = "http://localhost:8088/addreserv";
  constructor(private http: HttpClient) {
    this.selectedReserv = new Reserv();
  }



  postReserv(reserv: Reserv) {
    console.log(reserv);
    return this.http.post(this.URL_API2, reserv);
  }

  getReservs() {
    //console.log("ASDF",this.http.get<Employee[]>(this.URL_API));
    return this.http.get<Reserv[]>(this.URL_API);
  }



//   putEmployee(reserv: Reserv) {
//     console.log(reserv);

//     return this.http.put(this.URL_API + /${employee._id}, employee);
//   }

//   deleteEmployee(_id: string) {
//     return this.http.delete(this.URL_API + /${_id});
//   }
}