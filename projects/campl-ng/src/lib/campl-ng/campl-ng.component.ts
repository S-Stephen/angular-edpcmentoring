import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";

// this has been included via a script tag
// declare var project_light_cued: any;

@Component({
  selector: "campl-ng",
  templateUrl: "./campl-ng.component.html",
  //styles: ["h1 { background-color: red }"]
  //styleUrls: ["./campl-ng.component.css"],
  styleUrls: [
    "./full-stylesheet-base64.css",
    "./campl-ng.component-custom.css"
  ],
  encapsulation: ViewEncapsulation.None // required to provide style to others
})
export class CamplNgComponent implements OnInit {
  // TODO given this input can we generate a service that we can inject
  // into child components (rather than a chain of @Input s)
  @Input()
  nav_menu$: Observable<NavMenu>;
  nav_menu: NavMenu;

  constructor() {}

  ngOnInit() {
    this.nav_menu$.subscribe(menu => {
      this.nav_menu = menu;
    });
  }
}
