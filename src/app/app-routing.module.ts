import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { tokenGuard } from './token.guard';
import { TrainersComponent } from './trainers/trainers.component';
//import { tokenGuard } from './token.guard';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'program', component: ProgramAddComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'signin' , component:SigninComponent} , 
  {path : 'home' , component: HomeComponent},
  {path : 'schedule' , component: ScheduleComponent},
  {path : 'trainers' , component: TrainersComponent},
  {path : 'page' , component: PageComponent , canActivate:[tokenGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
