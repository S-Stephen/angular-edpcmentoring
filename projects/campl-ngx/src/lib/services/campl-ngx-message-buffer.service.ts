// This is the service used to pass our error messages
import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CamplNgMessageBufferService {
  message$ = new Subject<string>();
  sendMessage(message: string) {
    this.message$.next(message);
  }
  constructor() {}
}
