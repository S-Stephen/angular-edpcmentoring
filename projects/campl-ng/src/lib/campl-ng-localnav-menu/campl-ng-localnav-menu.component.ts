import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";
import { CamplNgPrimaryMenuStateService } from "../services/campl-ng-primary-menu-state.service";
import { CamplNgLocalmenuService } from "../services/campl-ng-localmenu.service";

/**
 * At the moment we only manage menus two teirs deep
 * todo: look into css to allow many more tiers
 */

@Component({
  selector: "campl-ng-localnav-menu",
  templateUrl: "./campl-ng-localnav-menu.component.html",
  styleUrls: ["./campl-ng-localnav-menu.component.css"]
})
export class CamplNgLocalnavMenuComponent implements OnInit {
  @Input("menu")
  menu: any;
  @Input("level")
  level: number;
  @Output("parent_pos")
  parent_pos = new EventEmitter<number>();
  active: boolean = false;
  capabilities: any;
  //active: boolean = false;
  myid: string = "";
  left_pos: number = 9999;
  list_style: any = { display: "block" };
  menu_width: number = 100;
  window_width: number;

  constructor(
    public primary_comp: CamplNgPrimaryMenuStateService,
    public browser_capabilities: CamplNgCapabilitiesService,
    public local_nav: CamplNgLocalmenuService
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
