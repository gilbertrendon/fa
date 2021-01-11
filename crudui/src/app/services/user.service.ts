import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User;
  selectedUser: User;
  users: User[];
  readonly URL_API = "http://localhost:8088/getuserlist";
  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }



  postReserv(user: User) {
    console.log(user);
    return this.http.post(this.URL_API, user);
  }

  getUsers() {
    //console.log("ASDF",this.http.get<Employee[]>(this.URL_API));
    return this.http.get<User[]>(this.URL_API);
  }



//   putEmployee(reserv: Reserv) {
//     console.log(reserv);

//     return this.http.put(this.URL_API + /${employee._id}, employee);
//   }

//   deleteEmployee(_id: string) {
//     return this.http.delete(this.URL_API + /${_id});
//   }
}