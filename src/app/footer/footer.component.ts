import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  navShow:boolean=true;
  isLogin=false;
  constructor( public _AuthService:AuthService  ){
    _AuthService.nav.subscribe(val=>this.navShow=val);
  //   _AuthService.isLogIn().subscribe(data=>{
  //   if (data)
  //   {
  //     this.isLogin=true;
  //     console.log(data);
  //   }
  //   else 
  //   {
  //     this.isLogin=false;
  //     console.log(data);
  //   }
  // })
  _AuthService.login.subscribe(val=>this.isLogin=val);
    // _AuthService.nav.next(false);
  }

}
