import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLogin:boolean=false;
  programs:any=[];
  imageSource='https://res.cloudinary.com/dphrkslty/image/upload/v1708537815/';
  constructor( @Inject(PLATFORM_ID) private platformId: Object ,public _AuthService:AuthService , private _Router:Router){
    _AuthService.nav.next(true);

  //   if (isPlatformBrowser(this.platformId)) {
  //   if ( localStorage.getItem('Token')==null)
  //   {
  //     this.isLogin=false; 
  //   }
  //   else
  //   {
  //   _AuthService.checkToken(localStorage.getItem('Token')).subscribe( (data:any) => {
  //   this.isLogin=data.status; 
  //   console.log(this.isLogin)
  //   })
  //   }
  // }
      _AuthService.login.subscribe(val=>this.isLogin=val);

      _AuthService.getPrograms().subscribe((data) =>
      {
        this.programs=data.results;
      });
     console.log(this.programs);
    //  console.log('iuoihoi');
    }
    showProgram(index:number)
    {
      this._AuthService.setPrograms(index);
      this._Router.navigate(['/page']);
      console.log(index)
    }
  checkbtn1:boolean=true;
  checkbtn2:boolean=false;
e: any;
event: any;
  onread1()
  {
    this.checkbtn1=true;
    this.checkbtn2=false;
  }
  onread2()
  {
    this.checkbtn1=false;
    this.checkbtn2=true;
  }
  checkbtn1Classes:boolean=true;
  checkbtn2Classes:boolean=false;
  checkbtn3Classes:boolean=false;
  checkbtn4Classes:boolean=false;
  onclasses1()
  {
  this.checkbtn1Classes=true;
  this.checkbtn2Classes=false;
  this.checkbtn3Classes=false;
  this.checkbtn4Classes=false;
  }
  onclasses2()
  {
  this.checkbtn1Classes=false;
  this.checkbtn2Classes=true;
  this.checkbtn3Classes=false;
  this.checkbtn4Classes=false;
  }
  onclasses3()
  {
  this.checkbtn1Classes=false;
  this.checkbtn2Classes=false;
  this.checkbtn3Classes=true;
  this.checkbtn4Classes=false;
  }
  onclasses4()
  {
  this.checkbtn1Classes=false;
  this.checkbtn2Classes=false;
  this.checkbtn3Classes=false;
  this.checkbtn4Classes=true;
  }
registerForm:FormGroup=new FormGroup({
  'name': new FormControl(null,[Validators.required ]),
  'mail': new FormControl(null,[Validators.required , Validators.email ]),
  'supject': new FormControl(null,[Validators.required ]),
  'message': new FormControl(null,[Validators.required ]),
})
sendMessage(formData: any)
{
console.log(formData.value)
}

}
