import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import {userData} from './user'
import { Observable , BehaviorSubject } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(public _HttpClient :HttpClient) { }
  user =new BehaviorSubject<userData | null>(null);
  program =new BehaviorSubject<number>(0);
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
  setPrograms(programId: number)
  {
    this.program.next(programId);
  }
  getPrograms(): Observable<any>
  {
    return this._HttpClient.get('http://localhost:3000/gym-star/programs');
    // return this._HttpClient.get(`http://localhost:3000/gym-star/programs/${this.program}`);
  }
  postPrograms( source:any): Observable<any>
  {
    return this._HttpClient.post('http://localhost:3000/gym-star/programs/add'  ,source);
  }
  // getProgram(index:number): Observable<any>
  // {
  //   return this._HttpClient.get('http://localhost:3000/gym-star/programs' , index);
  // }
}
