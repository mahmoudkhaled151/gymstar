import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient :HttpClient) { }
  register(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/api-store-book/users/add' , data);
  }
  sign(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/api-store-book/users/login' , data)
  }
}
