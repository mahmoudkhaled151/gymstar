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

  }
  ngOnInit() {
  }
  signin:FormGroup=new FormGroup({

    'Email': new FormControl(null,[Validators.required ]),
    'password': new FormControl(null, Validators.required),
  });
  messageError:any
  sendMessage(formData: any) {
    if (formData.valid == true) {
      this._AuthService.sign(formData.value).subscribe(
        data => {
          if (data.status == true) {
            // console.log("Registration success",data.message)
            window.alert(data.message);
            this._Router.navigate(['/home']);
            this._AuthService.saveUserData(data.results ,data.token);
            console.log(this._AuthService.user.getValue());


          } else {
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
