import { Component, OnInit, Input } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
