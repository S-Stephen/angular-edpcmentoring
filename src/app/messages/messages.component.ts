import { Component, OnInit } from "@angular/core";
import { CamplNgxMessageBufferService } from 'campl-ngx';

@Component({
  selector: "men-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  //message$: Subject<string> = this.messageBufferService.message$;

  constructor(private messageService: CamplNgxMessageBufferService) {
    
  }
  
  ngOnInit() {
  }

  clickalert(){
    this.messageService.sendMessage("Alert pressed"+(new Date()))
  }
}
