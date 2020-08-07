import { Component, OnInit } from '@angular/core';
import { CamplNgxMessageBufferService } from '../services/campl-ngx-message-buffer.service';

import { Message } from '../models/message';

import { ChangeDetectorRef } from '@angular/core'; // [1]
// constructor(private ref: ChangeDetectorRef){}

@Component({
  selector: 'campl-ngx-messages',
  templateUrl: './campl-ngx-messages.component.html',
  styleUrls: ['./campl-ngx-messages.component.css']
})
export class CamplNgxMessagesComponent implements OnInit {
  // message$: Subject<string> = this.messageBufferService.message$;

  public message_log: Message[];
  // public show_information: boolean;
  public show: {};


  constructor(
    private messageBufferService: CamplNgxMessageBufferService,
    private ref: ChangeDetectorRef
  ) {
    this.message_log = [];
    // this.show_information = true;
    this.show = {
      'information': true,
      'alert': true,
      'success': true,
      'warning': true,
    };
  }

  messages(type: string) {
    // type: 'information', 'success', 'alert', 'warning'
    // return messages of give type (wrapper around filter)
    return this.message_log.filter(function (msg) { return msg.type === type })
  }

  toggleMessages(type: string) {
    this.show[type] = !this.show[type];
    this.ref.detectChanges(); // [1] /?
  }

  ngOnInit() {
    this.messageBufferService.message$.subscribe(msg => {
      this.message_log.push(msg);
      this.showMessage(msg.type)
      this.ref.detectChanges(); // [1]
    });
  }


  public hideMessages(type: string) {
    /**
     * replaces:
     * $('.campl-notifications-panel').each(function(){
     *   var $thisElem = $(this);
     *   $thisElem.append('<a href='#' class='ir campl-close-panel'>Close panel</a>');
     *   $thisElem.find('.campl-close-panel').bind('click', function(e){
     *    $(e.target).parent().remove();
     *    e.preventDefault();
     *   })
     * })
     * from DOM ready custom.js
     */

    this.show[type] = false;
    this.ref.detectChanges(); // [1]
  }

  public showMessage(type: string) {
    this.show[type] = true;
    this.ref.detectChanges(); // [1]
  }
}

// [1] - https://stackoverflow.com/questions/38445670/angular-2-view-will-not-update-after-variable-change-in-subscribe
