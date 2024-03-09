import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  isLogin:boolean=false;
  navShow:boolean=true;
  programs: any;
  constructor(private _Location:Location, @Inject(PLATFORM_ID) private platformId: Object ,public _Router:Router , public _AuthService:AuthService){
    _AuthService.nav.subscribe(val=>this.navShow=val);
    _AuthService.login.subscribe(val=>this.isLogin=val);
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('Token')==null)
      {
        this.isLogin=false; 
      }
      else
      {
      this.initializeComponent();
      this._AuthService.checkToken(localStorage.getItem('Token')).subscribe( (data:any) => {
      _AuthService.login.next(data.status); 
      console.log(this.isLogin)
      })
      }
    }   
  }

  initializeComponent()
  {
    this._AuthService.getPrograms().subscribe((data) =>
    {
      this.programs=data.results;
    });
  }
sign()
{
this._Router.navigate(['/signin']);

}
logOut()
{
  localStorage.clear();
  this._AuthService.login.next(false);
}
// indexChange :any ;
  async showProgram(index:number)
    {
      if (window.location.pathname =='/page')
      {
        
        console.log(window.location.pathname);
         
          this._AuthService.setPrograms(index);
          // this._AuthService.getProgram().subscribe(data=>
          //   {
          //     console.log(data)
          //   })
          await this._Router.navigate(['']);
          await this._Router.navigate(['/page']);
          // this._Router.navigate([""]);
        
      }
      else
      {
        this._AuthService.setPrograms(index);
        this._Router.navigate(['/page']);
        console.log(window.location.pathname)
        // this.indexChange=index;
      }
    
      console.log(index);
    }
}
