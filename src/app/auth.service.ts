import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import {userData} from './user'
import { Observable , BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(public _HttpClient :HttpClient) { }
  user =new BehaviorSubject<userData | null>(null);
  nav =new BehaviorSubject(false);
  
  register(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/api-store-book/users/add' , data);
  }
  sign(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/api-store-book/users/login' , data)
  }
  saveUserData(userDataSave: any , token: any)
  {
    let User=new userData(userDataSave.fname , userDataSave.lname , userDataSave.email , token);
     this.user.next(User);
  }
}
