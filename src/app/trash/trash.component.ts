import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit{

  width: boolean = false;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.sidebar.subscribe(value => {
      this.width = value;
    });
  }

}
