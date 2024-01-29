import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogin:boolean=false;
  constructor(public _Router:Router , public _AuthService:AuthService){
   _AuthService.user.subscribe(data =>
    {
      if(data)
      {
        this.isLogin=true;
        console.log(this.isLogin);
      }
      else 
      {
        this.isLogin=false;
        console.log(this.isLogin);
      }
    })
  }

ngOnInit() {
  }
sign()
{
this._Router.navigate(['/signin']);
}
}
