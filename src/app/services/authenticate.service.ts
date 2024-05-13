import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private router: Router, private auth: AuthorizationService) { }

  canActivate():boolean{
    if (this.auth.GetToken()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
