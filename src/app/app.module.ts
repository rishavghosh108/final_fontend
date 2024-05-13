import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerachbarComponent } from './serachbar/serachbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';

import { ApiServiceService } from './services/api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InboxComponent } from './inbox/inbox.component';
import { AuthorizationService } from './services/authorization.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SerachbarComponent,
    ProfileComponent,
    LoginComponent,
    ForgetComponent,
    SignupComponent,
    OtpComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiServiceService,AuthorizationService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
