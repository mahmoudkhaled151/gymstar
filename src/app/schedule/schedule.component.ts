import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
 day='';
  isLogin = false;
constructor(private _AuthService:AuthService  , private _Router:Router )
{
  _AuthService.login.subscribe(val=>this.isLogin=val);
  if (this.isLogin==false) {
     _Router.navigate(['']);
  }
  // _AuthService.nav.next(false);
}
ngOnInit(): void {     
  if (this.day=='')
  {
    this.day='monday';
    this._AuthService.schedule(this.day).subscribe(data=>
      {
        this.timing=data.results;
        
      })    
  }
}
timing :any
sendData(x:string)
{
  console.log(x);
  this._AuthService.schedule(x).subscribe(data=>
    {
      this.timing=data.results;
      
    })
    this.day=x;
}

}
