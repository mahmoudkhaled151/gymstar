import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  /*checkbox values*/
  selectedCheckBoxList:string[] = [];
  techStackList: any = [
    { id: 1, name: 'Morning', code :   'Morning' },
    { id: 2, name: 'Mid-Day', code :   'Mid-Day' },
    { id: 3, name: 'Afternoon', code : 'Afternoon' },
    { id: 4, name: 'Evening', code :   'Evening' },
  ];
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      technology: this.formBuilder.array([], [Validators.required])
    })
  }
  controlOnChange(e :any) {
    const technologies: FormArray = this.form.get('technology') as FormArray;
  
    if (e.target.checked) {
      technologies.push(new FormControl(e.target.value));
      this.selectedCheckBoxList.push(e.target.value);
    } else {
       const index = technologies.controls.findIndex(technology => technology.value === e.target.value);
       technologies.removeAt(index);
    }
  }
 /*end*/
  registerForm:FormGroup=new FormGroup({
    'fname': new FormControl(null,[Validators.required ]),
    'lname': new FormControl(null,[Validators.required ]),
    'gender': new FormControl(null,[Validators.required]),
    'day': new FormControl(null,[Validators.required , Validators.min(1) , Validators.max(31)]),
    'month': new FormControl(null,[Validators.required , Validators.min(1) , Validators.max(12)]),
    'year': new FormControl(null,[Validators.required , Validators.min(1960) , Validators.max(2010)]),
    'Email': new FormControl(null,[Validators.required , Validators.email]),
    'password': new FormControl(null, Validators.pattern('^[A-Z][a-z0-9]{5,8}$')),
    'repassword': new FormControl(null, Validators.pattern('^[A-Z][a-z0-9]{5,8}$')),
  });
  checkpassword(fd:FormGroup)
  {
    if (fd.controls['password'].value ===fd.controls['repassword'].value)
    {
      console.log("mahmoud");
    }
  }

  
  sendMessage(formData: any)
  {
    console.log(formData.value);
    console.log(this.selectedCheckBoxList)
    
  }  
}