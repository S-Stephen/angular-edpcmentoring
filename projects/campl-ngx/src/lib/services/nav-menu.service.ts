import { Injectable, Inject } from '@angular/core';
import { NavMenu } from '../models/nav-menu';
import { NavMenuConfigService } from './nav-menu-config.service';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NavMenuService {
  private menu: NavMenu;

  selected$ = new ReplaySubject<string>(); // The menu currently selected

  constructor(@Inject(NavMenuConfigService) private inmenu) {
    this.menu = inmenu;
  }
  public getMenus(): NavMenu {
    return this.menu;
  }
  public setSelected(menuid: string) {
    // send the id of the next open control
    this.selected$.next(menuid);
  }
}
