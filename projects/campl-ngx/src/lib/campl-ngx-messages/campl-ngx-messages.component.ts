import { Component, OnInit } from "@angular/core";
import { CamplNgMessageBufferService } from "../services/campl-ngx-message-buffer.service";

import { ChangeDetectorRef } from "@angular/core"; // [1]
//constructor(private ref: ChangeDetectorRef){}

@Component({
  selector: "campl-ngx-messages",
  templateUrl: "./campl-ngx-messages.component.html",
  styleUrls: ["./campl-ngx-messages.component.css"]
})
export class CamplNgMessagesComponent implements OnInit {
  //message$: Subject<string> = this.messageBufferService.message$;

  public message_log: string[];
  public show_messages: boolean;

  constructor(
    private messageBufferService: CamplNgMessageBufferService,
    private ref: ChangeDetectorRef
  ) {
    this.message_log = [];
    this.show_messages = false;
  }

  toggleMessages() {
    this.show_messages = !this.show_messages;
    this.ref.detectChanges(); // [1] /?
  }

  ngOnInit() {
    this.messageBufferService.message$.subscribe(msg => {
      this.message_log.push(msg);
      this.ref.detectChanges(); // [1]
    });
  }

  public hideMessages() {
    /**
     * replaces:
     * $(".campl-notifications-panel").each(function(){
     *   var $thisElem = $(this);
     *   $thisElem.append("<a href='#' class='ir campl-close-panel'>Close panel</a>");
     *   $thisElem.find('.campl-close-panel').bind("click", function(e){
     *    $(e.target).parent().remove();
     *    e.preventDefault();
     *   })
     * })
     * from DOM ready custom.js
     */

    this.show_messages = false;
    this.ref.detectChanges(); // [1]
  }
}

// [1] - https://stackoverflow.com/questions/38445670/angular-2-view-will-not-update-after-variable-change-in-subscribe
