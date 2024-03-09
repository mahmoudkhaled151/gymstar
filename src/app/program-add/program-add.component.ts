import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrl: './program-add.component.css'
})
export class ProgramAddComponent {
  constructor( public _AuthService:AuthService  ){

  }
  
  postData:FormGroup=new FormGroup({

    'tittle': new FormControl(null,[Validators.required ]),
    'Description': new FormControl(null,[Validators.required ]),
     imageSource: new FormArray([], [Validators.required]),
    'programId': new FormControl(null, Validators.required),
    'Duration': new FormControl(null, Validators.required),
   // 'exercise': new FormControl(null, Validators.required),
  });  
  
  messageError:any
  sendMessage() {

    const formData = new FormData();
    
    const postDataValue = this.postData.value;

    for (const key in postDataValue) {
        if (postDataValue.hasOwnProperty(key)) {
            formData.append(key, postDataValue[key]);
        }
    }
    const fileSourceControl = this.postData.get('imageSource');
    if (fileSourceControl && fileSourceControl.value) {
        const files = fileSourceControl.value;
        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }
    }
    if (this.postData.valid) {
        this._AuthService.postPrograms( formData).subscribe(
            data => {
                console.log(data.formData);
            }
        );
    }
}
    ngOnInit() {
          
   }  
   onFileSelected(event : any) {
    const dataArray = this.postData.get('imageSource') as FormArray;

    if (event.target.files.length > 0) {
      for(let i=0 ; i< event.target.files.length; i++)
      {
        const image = event.target.files[i];
        dataArray.push(new FormControl(image));
        console.log(dataArray)
        // this.postData.patchValue({
        //   imageSource: image
        // });
      }
     
    }
  }
    
}
