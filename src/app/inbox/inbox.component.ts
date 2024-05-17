import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent{

  width: boolean = false;

  intervalId: any;

  mails:any;
  mail_count:number=0;

  constructor(private api: ApiServiceService) {}

   FetchMails(){
    this.api.Inbox().subscribe(
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
