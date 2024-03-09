import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object , private _Router:Router ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('Token'); // Get the token from localStorage
      let hand:Observable<HttpEvent<any>> ;
      if (!token) {
        return next.handle(req)
        
      }
      
      // Clone the request and add the Authorization header
      const authReq = req.clone({
        setHeaders: {
          'x-auth-token': token
        }
      });
      // Send the cloned request with the added header to the next handler
      return next.handle(authReq);
    } else {
      // If not in the browser environment, just proceed with the original request
      return next.handle(req)
      // .pipe(catchError(err=>{
      //   localStorage.removeItem('Token');
      //   this._Router.navigate(['/signin']);
      //   throw err;
      // }));
      

    }
  }
}
