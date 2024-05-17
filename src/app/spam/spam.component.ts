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
  intervalId: any;

  mails:any;
  mail_count:number=0;

  FetchMails(){
  this.api.Spam().subscribe(
    response=>{
      this.mail_count=response.body['data'].length
      this.mails=response.body['data']
    }
  )
  }

  ngOnInit(): void {

    this.api.sidebar.subscribe(value => {
      this.width = value;
    });

    this.FetchMails();
    this.intervalId = setInterval(() => {
      this.FetchMails();
    }, 300000); // 300000 ms = 5 minutes
  }

}

