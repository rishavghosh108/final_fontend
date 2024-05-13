import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name=""
  email=""

  constructor(private auth:AuthorizationService, private router:Router, private api: ApiServiceService){
    if(api.name.length===0 && api.email.length===0){
      api.Profile().subscribe(
        response=>{
          api.name=response.body['data']['successful']['name'];
          api.email=response.body['data']['successful']['email'];

          this.name=api.name;
          this.email=api.email;
        }
      )
    }
    this.name=api.name;
    this.email=api.email;
  }

  Logout(){
    this.auth.RemoveToken()
    window.location.reload();
  }

}
