import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLogin:boolean=false;
  constructor(public _AuthService:AuthService){
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
