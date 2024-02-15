import { Component } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  result:any;
  constructor(public _AuthService:AuthService)
  {
    this._AuthService.getPrograms().subscribe((programs) => {
      this.result = programs.results;
    })
  }  
   more:Boolean=false;
   readMore()
   {
   this.more=true;
   }
}
