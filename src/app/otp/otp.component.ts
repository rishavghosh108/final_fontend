import { Component, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;

  constructor(private api:ApiServiceService, private router:Router){}

  onInput(event: any, nextInput: any) {
    const currentInput = event.target;
    const value = currentInput.value;

    if (value.length > 1) {
      if (value.length > 1) {
        const val: any = value.substring(0, 1); // Only take the first character
        currentInput.value = val;
      }
    }

    // Enable next input if current input is not empty
    if (nextInput && nextInput.disabled && value !== "") {
      nextInput.disabled = false;
      nextInput.focus();
    }

    // Disable following inputs if Backspace is pressed
    // if (event.key === "Backspace") {
    //   const inputs = [this.input2, this.input3, this.input4];
    //   const currentIndex = inputs.indexOf(currentInput);
    //   if (currentIndex > 0) {
    //     currentInput.value = "";
    //     currentInput.disabled = true;
    //     inputs[currentIndex - 1].focus();
    //   }
    // }

    // Toggle button active state based on input value
    // this.isButtonActive = this.input4.value !== "" && !this.input4.disabled;
  }

  error: boolean = false;

  Submit() {
    const otp=this.input1.nativeElement.value+this.input2.nativeElement.value+this.input3.nativeElement.value+this.input4.nativeElement.value
    if (otp.length===4) {
      this.api.Verification({"otp":otp}).subscribe(
        (response)=>{
          if ('successful' in response.body['data']){
            this.router.navigate(['/login'])
            console.log(response.body);
            
          }
        },(error)=>{
        }
      )
    } else {
      this.error = true;
    }
  }

}
