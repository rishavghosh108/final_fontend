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
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { ComposeComponent } from './compose/compose.component';

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
    InboxComponent,
    StarredComponent,
    SentComponent,
    DraftComponent,
    SpamComponent,
    TrashComponent,
    ComposeComponent
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
