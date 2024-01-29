import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    PageComponent,
    SigninComponent,
    FooterComponent,
    ScheduleComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule ,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
