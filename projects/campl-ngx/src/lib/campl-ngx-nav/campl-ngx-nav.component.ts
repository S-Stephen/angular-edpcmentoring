import { Component, OnInit, Inject, Input } from '@angular/core';
import { NavMenu } from '../models/nav-menu';
import { Observable } from 'rxjs/Observable';
// might be better to replace testing Capabilities with directives that do so?
import { CamplNgxCapabilitiesService } from '../services/campl-ngx-capabilities.service';
import { CamplNgxPrimaryMenuStateService } from '../services/campl-ngx-primary-menu-state.service';
import { CamplNgxLocalmenuService } from '../services/campl-ngx-localmenu.service';
// import { NavMenuService } from '../services/nav-menu.service';
// import { NavMenu } from '../models/nav-menu';

// defined as const in model rather than separate field atm
// import { NavMenuConfigService } from ??

@Component({
  selector: 'campl-ngx-nav',
  templateUrl: './campl-ngx-nav.component.html',
  styleUrls: ['./campl-ngx-nav.component.css']
})
export class CamplNgxNavComponent implements OnInit {
  @Input()
  nav_menu$: Observable<NavMenu>;
  capabilities: any;
  myid = 'CamplNgxNavComponent';
  public open_localnav = false; // used to manage control
  public left_pos = -9999;
  public menu_width = 480;
  public list_style: any = {};
  public local_nav_con_pos: number;

  window_width: number;

  public nav_menu: NavMenu;
  constructor(
    public primary_comp: CamplNgxPrimaryMenuStateService,
    public browser_capabilities: CamplNgxCapabilitiesService,
    public local_nav: CamplNgxLocalmenuService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
    local_nav.localNavSource.subscribe(pos => {
      this.local_nav_con_pos = pos;
    });
  }

  ngOnInit() {
    this.nav_menu$.subscribe(nm => (this.nav_menu = nm));
    this.primary_comp.id$.subscribe(id => {
      if (id === this.myid) {
        this.open_localnav = true;
        this.left_pos = 0;
      } else {
        this.open_localnav = false;
        this.left_pos = -9999;
      }
    });

    this.window_width = window.innerWidth;
  }

  clickMenuBtn() {
    // clicking this will toggle the displayMenu

    // toggle control

    let controlto = '';
    if (this.open_localnav) {
      if (this.capabilities['mobile_layout']) {
        this.menu_width = 0;
        this.local_nav.updatePosition(-9999);
      }
      controlto = '__NONE__';
    } else {
      // set the menu width based on capabilities
      if (this.capabilities['mobile_layout']) {
        this.list_style = { 'width.px': this.window_width };
        this.local_nav.updatePosition(0);
      }
      controlto = this.myid;
    }

    this.primary_comp.sendId(controlto);
  }
}
