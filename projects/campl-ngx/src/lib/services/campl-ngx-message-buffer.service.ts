// This is the service used to pass our error messages
import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

import { Message } from "../models/message";

@Injectable({
  providedIn: "root"
})
export class CamplNgxMessageBufferService {
  message$ = new Subject<Message>();
  // message type: 'information', 'success', 'alert', 'warning'
  sendMessage(message: string, type: string = 'information', ) {
    this.message$.next({ value: message, type: type });
  }
  constructor() { }
}
