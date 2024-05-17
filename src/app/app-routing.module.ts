import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { AuthOtpPageService } from './services/auth-otp-page.service';
import { InboxComponent } from './inbox/inbox.component';
import { AuthenticateService } from './services/authenticate.service';
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {path: '', redirectTo: '/inbox', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'forget', component: ForgetComponent},
  {path:'signup', component: SignupComponent},
  {path:'otp', component: OtpComponent, canActivate: [AuthOtpPageService]},
  {path: 'inbox', component: InboxComponent, canActivate: [AuthenticateService]},
  {path: 'starred', component: StarredComponent, canActivate: [AuthenticateService]},
  {path: 'sent', component: SentComponent, canActivate: [AuthenticateService]},
  {path: 'draft', component: DraftComponent, canActivate: [AuthenticateService]},
  {path: 'spam', component: SpamComponent, canActivate: [AuthenticateService]},
  {path: 'trash', component: TrashComponent, canActivate: [AuthenticateService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
