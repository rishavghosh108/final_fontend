import { Component } from '@angular/core';

@Component({
  selector: 'app-serachbar',
  templateUrl: './serachbar.component.html',
  styleUrls: ['./serachbar.component.css']
})
export class SerachbarComponent {

  profile:boolean=false;

  ChangeProfile(){
    this.profile=!this.profile;
  }

}
