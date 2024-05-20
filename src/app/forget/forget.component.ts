import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  constructor(private api:ApiServiceService, private router:Router) { }

  Forget = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
  })

  exist_error=false;

  email_error=false;
  password_error=false;
  confirm_error=false;

  // Check(){
  //   this.email_error=this.Forget.get('email')?.valid ? false : true
  // }

  Email_error(){
    this.email_error=false;
  }
  Password_error(){
    this.password_error=false;
  }
  Confirm_error(){
    this.confirm_error=false;
  }

  domain="@bengalintituteoftechnology.online"

  Submit(){
    if(this.Forget.valid){
      this.api.Email({"email":this.Forget.get('email')?.value+this.domain}).subscribe(
        response=>{
          if(response.body.data['successful'] === 'true'){
            const body={"email":this.Forget.get("email")?.value+this.domain,"password":this.Forget.get("password")?.value}
            this.api.Forget(body).subscribe(
              resp=>{
                this.api.otptoken=resp.headers.get('otpverify')
                this.router.navigate(['/otp'])
              }
            )
          }else{
            this.exist_error=true;
          }
        },error=>{
          console.log(error)
      })
    }else{
      this.email_error=this.Forget.get('email')?.valid ? false : true;
      this.password_error=this.Forget.get('password')?.valid ? false : true;
      this.confirm_error=this.Forget.get('confirm')?.valid ? false : true;
    }
  }
}
