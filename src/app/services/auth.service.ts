import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {userData} from 'src/app/userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = ' https://routeegypt.herokuapp.com/';

  // tslint:disable-next-line: variable-name
  constructor(public _HttpClient: HttpClient) { }

  userData = new BehaviorSubject(null);

  signUp(data): Observable<any>
  {
    return this._HttpClient.post( 'https://routeegypt.herokuapp.com/signup', data);
  }
  signIn(data): Observable<any>
  {
    return this._HttpClient.post( 'https://routeegypt.herokuapp.com/signin', data);
  }
  saveUserData(user , token)
  {
    // tslint:disable-next-line: prefer-const
    let infoUser = new userData(user.first_name , user.last_name , user.email , token );
    this. userData .next(infoUser);
  }
}
