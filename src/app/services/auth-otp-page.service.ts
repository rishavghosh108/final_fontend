import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthOtpPageService {

  constructor(private api: ApiServiceService, private router: Router) { }

  canActivate():boolean{
    if (this.api.otptoken.length>0 ){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
