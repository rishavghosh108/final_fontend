import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-empty-box',
  templateUrl: './empty-box.component.html',
  styleUrls: ['./empty-box.component.css']
})
export class EmptyBoxComponent implements OnInit{
  @Input() message!: string;
  width: boolean = false;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.sidebar.subscribe(value => {
      this.width = value;
    });
  }
}
