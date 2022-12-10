import { LUser } from './../constant/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, API_HOST } from '../constant/api';
import { User } from '../constant/model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAdmin: boolean = false;
  isLogin: boolean = false;
  constructor(public http: HttpClient) {}

  signUp(user: User) {
    return this.http.post(API_HOST + API.SIGN_UP, user);
  }
  login(data: LUser) {
    return this.http.post(API_HOST + API.LOGIN, data);
  }
}
