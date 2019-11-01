import { Injectable } from '@angular/core';

import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CamplNgPrimaryMenuStateService {
  /**
  All this service will do is publish the id of the primary control component eg menu
  A subscriber will listen to this service
    - if they become the control they will activate themselves
    - if they are not the control they will close / de-activate
   */
  constructor() { }

  id$ = new Subject<string>();
  sendId(id: string) {
    //send the id of the next open control
    this.id$.next(id);
  }
}
