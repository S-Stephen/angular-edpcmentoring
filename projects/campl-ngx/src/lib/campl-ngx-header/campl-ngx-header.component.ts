import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from "@angular/core";
import { CamplService } from "../services/campl.service";
import { CamplNgxPrimaryMenuStateService } from "../services/campl-ngx-primary-menu-state.service";

@Component({
  selector: "campl-ngx-header",
  templateUrl: "./campl-ngx-header.component.html",
  styleUrls: ["./campl-ngx-header.component.css"]
})
export class CamplNgxHeaderComponent implements OnInit, OnDestroy {
  menu_open: boolean = false;
  search_open: boolean = false;
  mega_menu_open: boolean = false; //this is the desktop mega_menu
  mega_menu_target: string = ""; //allows us to place ngClass on targets
  global_menus: any; //stores the menus to be displayed // mobile or otherwise
  public config: any;
  public quicklinks: any; // contains the list of quicklinks
  public global_nav: any; // contains the global nav links

  // navigate externally
  // https://stackoverflow.com/questions/48077840
  @ViewChild('search1Form',{static:true}) search1FormElement;
  @ViewChild('search2Form',{static:true}) search2FormElement;

  public navigate1(){
    this.search1FormElement.nativeElement.submit();
  }
  public navigate2(){
    this.search2FormElement.nativeElement.submit();
  }

  // there is opportunity here to create a new class/interface with this field as reflection and the injection of the MenuService
  //  BUT we would have to manage the search boxes as a separate component! - trouble is the responsive box appears in a different
  //  component as the regular box - communication required?
  // Todo refactor into multiple components Header => [ menu, quicklinks, search, ?globalnav? ]
  public myidsearch: string = "CamplNgxHeaderComponentSearch";
  public myidnav: string = "CamplNgxHeaderComponentNav";
  public myidmega: string = "CamplNgxHeaderComponentMega";

  constructor(
    public primary_comp: CamplNgxPrimaryMenuStateService,
    public campl_config: CamplService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    this.quicklinks = this.config.quicklinks;
    this.global_nav = this.config.global_nav;

    this.primary_comp.id$.subscribe(id => {
      if (id == this.myidsearch && !this.search_open) this.search_open = true;
      else this.search_open = false;

      if (id == this.myidnav && !this.menu_open) {
        this.global_menus = this.config["global_nav"]; // FIXME sets our global menus for the first time
        this.menu_open = true;
        this.openBodyNav();
      } else if (this.menu_open) {
        this.global_menus = this.config["global_nav"]; // FIXME sets our global menus for the first time
        this.menu_open = false;
        this.closeBodyNav();
      }

      if (id == this.myidmega) this.mega_menu_open = true;
      else {
        this.mega_menu_open = false;
        this.mega_menu_target = "";
      }
    });
  }

  ngOnDestroy() {
    if (this.menu_open) {
      this.renderer.removeClass(document.body, "campl-navigation-open");
    }
  }

  closeBodyNav() {
    this.renderer.removeClass(document.body, "campl-navigation-open");
  }

  openBodyNav() {
    this.renderer.addClass(document.body, "campl-navigation-open");
  }

  toggleBodyNav() {
    let id: string = !this.menu_open ? this.myidnav : "NOTSET";
    this.primary_comp.sendId(id);
  }

  toggleSearch() {
    let id: string = !this.search_open ? this.myidsearch : "NOTSET";
    this.primary_comp.sendId(id);
  }

  toggleMegaMenu(target) {
    // there is a single .campl-global-navigation-drawer
    // multiple target #target elements
    let id: string =
      this.mega_menu_open && this.mega_menu_target == target
        ? "NOTSET"
        : this.myidmega;
    this.mega_menu_target = target;
    // the config object expects and element global_nav (an array of menus)
    this.global_menus = this.config["global_nav"].reduce(function(out, menu) {
      if (menu.anchor == target) out.push(menu);
      return out;
    }, []);
    this.primary_comp.sendId(id);
  }
  isMe(ele) {
    return ele == this.mega_menu_target;
  }
}
