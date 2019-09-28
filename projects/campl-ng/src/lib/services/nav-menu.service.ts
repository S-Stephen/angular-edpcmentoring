import { Injectable, Inject } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { NavMenuConfigService } from "./nav-menu-config.service";

@Injectable()
export class NavMenuService {
  private menu: NavMenu;

  constructor(@Inject(NavMenuConfigService) private inmenu) {
    this.menu = inmenu;
    console.log("NavMenuServiceService we have menus: " + this.menu);
  }
  public getMenus(): NavMenu {
    return this.menu;
  }
}
