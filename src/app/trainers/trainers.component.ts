import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {
   isLogin =false;
   constructor(private _AuthService:AuthService  , private _Router:Router)
   {
    _AuthService.login.subscribe(val=>this.isLogin=val);
     if (this.isLogin==false) {
     _Router.navigate(['']);
  }
   }
}

