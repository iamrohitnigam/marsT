import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../_shared/constant/app-const';
import { map } from 'rxjs/operators';

export interface Users{
  users: User;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
}

interface address{
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:geo;
}

interface geo{
  lat:string;
  lng:string;
}

interface company{
  name:string;
  catchPhrase:string;
  bs:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Users>(AppConst.API_ENDPOINT + '/users')
      .pipe(map(data => {
        return data;
      }));
  }
}
