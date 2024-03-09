import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl , FormGroup , Validators } from '@angular/forms';
import {AuthService }from '../auth.service'
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
 constructor( public _AuthService:AuthService, public _Router:Router){
  _AuthService.nav.next(false);
 }
  registerForm:FormGroup=new FormGroup({
    'fname': new FormControl(null,[Validators.required ]),
    'lname': new FormControl(null,[Validators.required ]),
    'userName': new FormControl(null,[Validators.required]),
    'gender': new FormControl(null,[Validators.required]),
    'day': new FormControl(null,[Validators.required , Validators.min(1) , Validators.max(31)]),
    'month': new FormControl(null,[Validators.required , Validators.min(1) , Validators.max(12)]),
    'year': new FormControl(null,[Validators.required , Validators.min(1960) , Validators.max(2010)]),
    'email': new FormControl(null,[Validators.required , Validators.email]),
    'password': new FormControl(null, Validators.required),
    'repassword': new FormControl(null, Validators.required),
  });
  // checkpassword(fd:FormGroup)
  // {
  //   if (fd.controls['password'].value ===fd.controls['repassword'].value)
  //   {
  //     console.log("mahmoud");
  //   }
  // }
  messageError:any;
  inputError:any;
  sendMessage(formData: any) {
    if (formData.valid == true) {
      this._AuthService.register(formData.value).subscribe(
        data => {
          if (data.status == true) {
            // console.log("Registration success",data.message)
            // window.alert(data.message);
            this._Router.navigate(['/signin'])
          } else {
            window.alert('Registration failed. Please try again.');
            this.inputError=data.message;
          }
        },
        err => {
          window.alert(`Error during registration: ${err.error.message}`);
          this.messageError=err.error.message;
          
        }
      )}
  }
  // sendMessage(formData: any)
  // {
  //   console.log(formData.value);
  //   console.log(this.selectedCheckBoxList)

  // }
}
