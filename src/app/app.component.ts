import { Component , HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' , 
  animations: [
    // animation triggers go here
  ]
})

export class AppComponent {
  title = 'Gym';
}
