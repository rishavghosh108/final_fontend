import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent{

  constructor(private api:ApiServiceService){}

  Hide(){
    this.api.composePanel(false)
  }
}
