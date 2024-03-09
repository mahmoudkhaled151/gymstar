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
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { CustomInterceptor } from './custom.interceptor';
import { HomePageComponent } from './home-page/home-page.component';
import { TrainersComponent } from './trainers/trainers.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    PageComponent,
    SigninComponent,
    FooterComponent,
    ScheduleComponent,
    ProgramAddComponent,
    HomePageComponent,
    TrainersComponent ,
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
    provideClientHydration(), { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
