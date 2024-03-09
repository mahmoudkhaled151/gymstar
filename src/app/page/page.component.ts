import { Component } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  result:any=0;
  exercise: any=0;
  backImg='';
  imageSource='https://res.cloudinary.com/dphrkslty/image/upload/v1708537815/'
  constructor(public _AuthService:AuthService)
  {
    this._AuthService.getProgram().subscribe((program) => {
      if (program.results.program!=null && program.results.exercises!=null)
      {
      this.result = program.results.program;
      this.backImg=this.imageSource + this.result.images[0];
      // this.result.images[0]="";
      this.exercise=program.results.exercises;
      }
    })
  }  
   more:Boolean=false;
}
