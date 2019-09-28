import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChildren,
  ViewChild,
  QueryList,
  OnChanges
} from "@angular/core";
import { CamplService } from "../services/campl.service";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";
import { CamplNgNavComponent } from "../campl-ng-nav/campl-ng-nav.component";

// Service to load the jQuery IIFE
//import { DynamicScriptLoaderService } from "../services/dynamic-script-loader.service";

//declare var $: any;

@Component({
  selector: "campl-ng-titlenav",
  templateUrl: "./campl-ng-titlenav.component.html",
  styleUrls: ["./campl-ng-titlenav.component.css"]
})
export class CamplNgTitlenavComponent implements OnInit {
  @Input()
  nav_menu$: Observable<NavMenu>;
  @Input()
  nav_menu: NavMenu;

  public message: string;
  private currentMenu: NavMenu = { title: "blank", subMenus: [] };

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(CamplNgNavComponent, { static: false })
  childMenu: CamplNgNavComponent;
  //@ViewChildren("navMenuID") things: QueryList<any>;

  public config: any;
  constructor(
    public campl_config: CamplService //, //public dynamicScriptLoader: DynamicScriptLoaderService
  ) {}

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    //console.log("campl_service: " + JSON.stringify(this.campl_config));
    //this.nav_menu$.subscribe(vals => alert("values received: " + vals));
  }

  ngAfterViewChecked() {
    if (this.currentMenu !== this.childMenu.nav_menu) {
      //The issue here is that the IIFE is not idempotent and
      //there appears to be a grandual render of the menu resulting in multiple calls
      // after our child gets rendered we re-run the project light IIFE
      // TODO This may better be provided as a service if other projectlight
      // elements are dynamically created
      //this.currentMenu = this.childMenu.nav_menu;
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.src = "/projectlight/javascripts/custom_navonly.js";
      head.appendChild(script);
    }
  }
}
