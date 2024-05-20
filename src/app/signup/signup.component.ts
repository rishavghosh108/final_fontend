import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  constructor(private api: ApiServiceService, private router:Router) { }

  Signupcheck = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])
  })

  type: boolean = true;

  ChangeType() {
    this.type = !this.type;
  }

  name_error: boolean = false;
  dob_error: boolean = false;
  gender_error: boolean = false;
  mobile_error: boolean = false;

  mobile_check_error: boolean = false;

  NameError() {
    this.name_error = false;
  }
  DobError() {
    this.dob_error = false;
  }
  GenderError() {
    this.gender_error = false;
  }
  MobileError() {
    this.mobile_error = false;
    this.mobile_check_error=false;
  }


  ChangeTab() {
    if (this.Signupcheck.valid) {
      this.api.Mobile({ mobile: this.Signupcheck.value.mobile }).subscribe(
        response => {
          
          this.mobile_check_error = response.body.data['successful'] === 'false' ? false : true;
          this.type = response.body.data['successful'] === 'false' ? false : true;
        })
    } else {
      this.name_error = this.Signupcheck.get('name')?.invalid ? true : false;
      this.dob_error = this.Signupcheck.get('dob')?.invalid ? true : false;
      this.gender_error = this.Signupcheck.get('gender')?.invalid ? true : false;
      this.mobile_error = this.Signupcheck.get('mobile')?.invalid ? true : false;
    }
  }

  email_error: boolean = false;
  password_error: boolean = false;
  confirmpassword_error: boolean = false;

  email_check_error: boolean = false;

  EmailError() {
    this.email_error = false;
  }

  PasswordError() {
    this.password_error = false;
  }
  ConfirmPasswordError() {
    this.confirmpassword_error = false;
  }

  Email = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[._a-zA-Z0-9]+$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
  })

  Submit() {
    if (this.Email.valid && this.Email.get('password')?.value===this.Email.get('confirmpassword')?.value) {
      const email = this.Email.get('email')?.value + '@bengalintituteoftechnology.online';
      this.api.Email({ "email": email }).subscribe(
        response => {
          if (response.body.data['successful'] === 'false' ? true : false) {
            const data = {
              user: this.Signupcheck.value,
              username: { email: email, password: this.Email.get('password')?.value }
            }

            this.api.Signup(data).subscribe(
              resp=>{
                this.api.otptoken=resp.headers.get('otpverify')
                this.router.navigate(['/otp'])
              }
            )

          } else {
            this.email_check_error = true;
          }
        }
      )
    } else {
      this.email_error = this.Email.get('email')?.invalid ? true : false;
      this.password_error = this.Email.get('password')?.invalid ? true : false;
      this.confirmpassword_error = this.Email.get('confirmpassword')?.invalid ? true : false;
      // this.temp=this.Email.get('comfirmpassword')?.value
    }
  }
}
