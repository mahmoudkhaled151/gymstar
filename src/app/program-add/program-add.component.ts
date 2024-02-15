import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrl: './program-add.component.css'
})
export class ProgramAddComponent {
  constructor( public _AuthService:AuthService  ){

  }
  ngOnInit() {
  }
  postData:FormGroup=new FormGroup({

    'tittle': new FormControl(null,[Validators.required ]),
    'Description': new FormControl(null,[Validators.required ]),
    'image': new FormControl(null, Validators.required),
    'id': new FormControl(null, Validators.required),
    'Duration': new FormControl(null, Validators.required),
    'exercise': new FormControl(null, Validators.required),
  });  
  // imageUrl: any;
  // imagePath: any;
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.imageUrl = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //     console.log(file.name);
  //     this.imagePath=file.name;
  //   }
  // }
  messageError:any
  sendMessage(formData: any) {
    if (formData.valid == true) {
      this._AuthService.postPrograms(formData.value).subscribe(
        data => {
          if (data.status == true) {
            console.log("Registration success",data.message);
          } else {
            window.alert('Registration failed. Please try again.');
          }
        },
      
      )}
  }
}
