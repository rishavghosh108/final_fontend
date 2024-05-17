import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  display!:boolean;

  constructor(private router: Router, private api: ApiServiceService){
    this.url=router.url
    this.api.sidebar.subscribe(value => {
      this.display = value;
    });
  }

  ChangeSidebar(){
    this.api.setSidebar(!this.display);
  }

  Show(){
    this.api.composePanel(true)
  }



  url:string=""

  Inboxurl(){
    return this.url==="/inbox"
  }

  Starredurl(){
    return this.url==="/starred"
  }

  Senturl(){
    return this.url==="/sent"
  }

  Drafturl(){
    return this.url==="/draft"
  }

  Spamurl(){
    return this.url==="/spam"
  }

  Trashurl(){
    return this.url==="/trash"
  }

}
