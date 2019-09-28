import { Component, OnInit, Inject, Input } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";
//import { NavMenuService } from "../services/nav-menu.service";
//import { NavMenu } from "../models/nav-menu";

// defined as const in model rather than separate field atm
// import { NavMenuConfigService } from ??

@Component({
  selector: "campl-ng-nav",
  templateUrl: "./campl-ng-nav.component.html",
  styleUrls: ["./campl-ng-nav.component.css"]
})
export class CamplNgNavComponent implements OnInit {
  @Input()
  nav_menu$: Observable<NavMenu>;

  public nav_menu: NavMenu;
  constructor() {}

  ngOnInit() {
    this.nav_menu$.subscribe(nm => (this.nav_menu = nm));
  }
  /*
  nav_menu: NavMenu;
  constructor(public menu: NavMenuService) {
    console.log(menu);
  }

  ngOnInit() {
    console.log(this.menu);
    this.nav_menu = this.menu.getMenus();
  }
  // then in template use something like :

  <li *ngFor="let item of this.nav_menu.subMenus"><a href="{{item.link}}">{{item.label}}</a></li>
  */
}
