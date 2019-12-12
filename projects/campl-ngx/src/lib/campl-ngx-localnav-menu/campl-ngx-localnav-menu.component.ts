import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CamplNgxCapabilitiesService } from "../services/campl-ngx-capabilities.service";
import { CamplNgxPrimaryMenuStateService } from "../services/campl-ngx-primary-menu-state.service";
import { CamplNgxLocalmenuService } from "../services/campl-ngx-localmenu.service";

/**
 * At the moment we only manage menus two teirs deep
 * todo: look into css to allow many more tiers
 */

@Component({
  selector: "campl-ngx-localnav-menu",
  templateUrl: "./campl-ngx-localnav-menu.component.html",
  styleUrls: ["./campl-ngx-localnav-menu.component.css"]
})
export class CamplNgxLocalnavMenuComponent implements OnInit {
  @Input("menu")
  menu: any;
  active: boolean = false;
  capabilities: any;
  //active: boolean = false;
  myid: string = "";
  left_pos: number = 9999;
  list_style: any = { display: "block" };
  menu_width: number = 100;
  window_width: number;

  constructor(
    public primary_comp: CamplNgxPrimaryMenuStateService,
    public browser_capabilities: CamplNgxCapabilitiesService,
    public local_nav: CamplNgxLocalmenuService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
  }

  ngOnInit() {
    if (this.capabilities["mobile_layout"]) {
      this.window_width = window.innerWidth;
      this.list_style = {
        "left.px": this.capabilities["window_width"],
        "width.px": this.capabilities["window_width"],
        display: "none"
      };
      //this.active=false
    }
  }

  back() {
    if (this.capabilities["mobile_layout"]) {
      this.list_style["display"] = "none";
      this.local_nav.moveRight(this.capabilities["window_width"]);
    }
  }

  forward() {
    if (this.capabilities["mobile_layout"]) {
      this.list_style["display"] = "block";
      this.local_nav.moveLeft(this.capabilities["window_width"]);
    }
  }
}
