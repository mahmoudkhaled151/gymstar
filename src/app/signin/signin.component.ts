import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl , FormGroup , Validators } from '@angular/forms';
import {AuthService }from '../auth.service'
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor( public _AuthService:AuthService , public _Router:Router ){
    _AuthService.nav.next(false);
  }
  ngOnInit() {
  }
  signin:FormGroup=new FormGroup({

    'userName': new FormControl(null,[Validators.required ]),
    'password': new FormControl(null, Validators.required),
  });
  messageError:any
  sendMessage(formData: any) {
    if (formData.valid == true) {
      this._AuthService.sign(formData.value).subscribe(
        data => {
          if (data.status == true) 
          {
            this._AuthService.saveUserData(data.token);
            this._Router.navigate(['/home']);
            console.log(data.token);
            this._AuthService.login.next(true);
          }
           else {
            window.alert('Registration failed. Please try again.');
          }
        },
        err => {
         // window.alert(`Error during registration: ${err.error.message}`);
          this.messageError=err.error.message;
        }
      )}
  }
}
