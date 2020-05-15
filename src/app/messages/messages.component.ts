import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { MessageBufferService } from "../services/message-buffer.service";

@Component({
  selector: "men-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  //message$: Subject<string> = this.messageBufferService.message$;

  public message_log: string[];
  public show_messages: boolean;

  constructor(private messageBufferService: MessageBufferService) {
    this.message_log = [];
    this.show_messages = true;
    this.message_log.push("first message")
  }

  toggleMessages() {
    this.show_messages = !this.show_messages;
  }

  ngOnInit() {
    this.messageBufferService.message$.subscribe(msg =>
      this.message_log.push(msg)
    );
  }
}
