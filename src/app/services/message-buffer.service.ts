// This is the service where will will pass our error messages
import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageBufferService {
  message$ = new Subject<string>();
  sendMessage(message: string) {
    this.message$.next(message);
  }
  constructor() {}
}
