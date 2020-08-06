import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../models/message';

@Component({
  selector: 'campl-ngx-message',
  templateUrl: './campl-ngx-message.component.html',
  styleUrls: ['./campl-ngx-message.component.css']
})
export class CamplNgxMessageComponent implements OnInit {
  @Input() msgin: Message;
  show: boolean;
  constructor() {
    this.show = true;
  }

  ngOnInit() {
  }
  public hide() {
    this.show = false;
  }

}
