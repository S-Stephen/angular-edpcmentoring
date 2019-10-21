import { Injectable } from "@angular/core";

import { ReplaySubject } from "rxjs";
/**
 * This service will be used to retrieve Modernizr queries
 * and share the results with all app components
 */

declare var Modernizr: any;

@Injectable({
  providedIn: "root"
})
export class CamplNgCapabilitiesService {
  modernizr: any = {};
  constructor() {}

  public modernizrSource = new ReplaySubject<any>(1);

  queryClient() {
    // share these with all our components!
    if (Modernizr.mq("only all")) {
      this.modernizr["supported"] = true;
    }
    if (Modernizr.mq("only screen and (max-width: 767px)")) {
      this.modernizr["mobile_layout"] = true;
    }
    if (Modernizr.mq("only screen and (min-width: 768px)")) {
      this.modernizr["wide_layout"] = true;
    }
    if (
      Modernizr.mq("only screen and (min-width: 768px) and (max-width: 1000px)")
    ) {
      this.modernizr["non_mobile_thin_layout"] = true;
    }
    console.log("emit our capabilities");
    this.modernizrSource.next(this.modernizr);
  }
}
