import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable , BehaviorSubject, of } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(@Inject(PLATFORM_ID) private platformId: any,  public _HttpClient :HttpClient ) { }
  program =new BehaviorSubject<number>(0);
  login =new BehaviorSubject(false);
  nav =new BehaviorSubject(true);
  isLogIn(): Observable<boolean> {
    // Check if the code is running in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Access localStorage if available
      const token = localStorage.getItem('Token');
      const isLoggedIn = !!token; // Convert token to boolean

      // Return an observable with the boolean value indicating whether the user is logged in or not
      this.login.next(isLoggedIn);
      return of(isLoggedIn);
    } else {
      // Return an observable with value false if not running in a browser environment
      this.login.next(false);
      return of(false);
    }
  }

  register(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/gym-star/users/add' , data);
  }
  sign(data: any): Observable<any>
  {
     return this._HttpClient.post('http://localhost:3000/gym-star/users/login' , data)
  }
  checkToken(token:any): Observable<any>
  {
    return this._HttpClient.get('http://localhost:3000/gym-star/home' , token)
  }
  saveUserData( token: any)
  {
    localStorage.setItem('Token' , token);
    this.login.next(true);
  }
  setPrograms(programId: number)
  {
    this.program.next(programId);
  }
  getPrograms(): Observable<any>
  {
    return this._HttpClient.get('http://localhost:3000/gym-star/programs');
  }
  postPrograms( source:any): Observable<any>
  {
    return this._HttpClient.post('http://localhost:3000/gym-star/programs/add' ,source);
  }
  getProgram(): Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/gym-star/program/exercises/${this.program.value}`);   
  }
  schedule(day :any):Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/gym-star/schedule/${day}` );   

  }
}
