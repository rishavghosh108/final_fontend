import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit{

  width: boolean = false;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.sidebar.subscribe(value => {
      this.width = value;
    });
  }

}
