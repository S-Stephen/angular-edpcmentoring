import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";
import { CamplNgCapabilitiesService } from "../services/campl-ngx-capabilities.service";

// this has been included via a script tag
// declare var project_light_cued: any;

// include the style as part of the library:
// https://stackoverflow.com/questions/51065359/include-assets-in-your-angular-6-library
@Component({
  selector: "campl-ngx",
  templateUrl: "./campl-ngx.component.html",
  //styles: ["h1 { background-color: red }"]
  //styleUrls: ["./campl-ngx.component.css"],
  styleUrls: [
    "./full-stylesheet-base64.css",
    "./campl-ngx.component-custom.css"
  ],
  encapsulation: ViewEncapsulation.None // required to provide style to others
})
export class CamplNgComponent implements OnInit {
  // TODO given this input can we generate a service that we can inject
  // into child components (rather than a chain of @Input s)
  @Input()
  nav_menu$: Observable<NavMenu>;
  nav_menu: NavMenu;
  capabilities: any = {};

  constructor(public browser_capabilities: CamplNgCapabilitiesService) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
  }

  ngOnInit() {
    this.nav_menu$.subscribe(menu => {
      this.nav_menu = menu;
    });
    // setup info about our browser
    this.browser_capabilities.queryClient();
  }
}
