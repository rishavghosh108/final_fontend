import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent implements OnInit{

  width: boolean = false;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.sidebar.subscribe(value => {
      this.width = value;
    });
  }

}

