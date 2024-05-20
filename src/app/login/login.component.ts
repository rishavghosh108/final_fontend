import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api: ApiServiceService, private auth: AuthorizationService, private router: Router){}

  Login = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(/^[._a-zA-Z0-9]+$/)]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
  })

  email_error:boolean=false;
  password_error:boolean=false;

  Email_err(){
    this.email_error=false;
  }
  Password_err(){
    this.password_error=false;
  }

  domain="@bengalintituteoftechnology.online"

  Submit(){
    if(this.Login.valid){
      this.api.Login({"email":this.Login.get('email')?.value+this.domain,"password":this.Login.get('password')?.value}).subscribe(
        response=>{
          this.auth.SetToken(response.headers.get('auth'))
          this.router.navigate(['/inbox'])
        },error=>{
          console.log(error);
          
        }
      )
    }else{
      this.email_error=this.Login.get('email')?.valid ? false : true ;
      this.password_error=this.Login.get('password')?.valid ? false : true ;
    }
  }

}