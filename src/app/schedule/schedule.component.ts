import { Component } from '@angular/core';
import { AuthService} from '../auth.service'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
constructor(public _AuthService:AuthService ){
  console.log(this._AuthService.nav)

}
}
