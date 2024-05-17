import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit{

  width: boolean = false;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.sidebar.subscribe(value => {
      this.width = value;
    });
  }

}
