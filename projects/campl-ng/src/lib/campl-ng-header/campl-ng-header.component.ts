import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";
import { CamplNgPrimaryMenuStateService } from '../services/campl-ng-primary-menu-state.service';

@Component({
  selector: "campl-ng-header",
  templateUrl: "./campl-ng-header.component.html",
  styleUrls: ["./campl-ng-header.component.css"]
})
export class CamplNgHeaderComponent implements OnInit, OnDestroy {
  menu_open: boolean = false;
  search_open: boolean = false;
  // there is opportunity here to create a new class/interface with this field as reflection and the injection of the MenuService
  //  BUT we would have to manage the search boxes as a seperate component! - trouble the responsive box appears in a differrent
  //  componant as the regular box - communication required?
  // Todo refactor into multiple components Header => [ menu, quicklinks, search, ?globalnav? ]
  public myidsearch: string = "CamplNgHeaderComponentSearch";
  public myidnav: string = "CamplNgHeaderComponentNav";

  constructor(public primary_comp: CamplNgPrimaryMenuStateService, private renderer: Renderer2) {}

  ngOnInit() {
    this.primary_comp.id$.subscribe(id => {
        if (id == this.myidsearch && !this.search_open)
            this.search_open=true
        else
            this.search_open=false

        if (id == this.myidnav && !this.menu_open){
            this.menu_open = true
            this.openBodyNav()
        }else if(this.menu_open){
            this.menu_open = false
            this.closeBodyNav()
        }
    })
  }

  ngOnDestroy() {
    if (this.menu_open) {
      this.renderer.removeClass(document.body, "campl-navigation-open");
    }
  }

  closeBodyNav() {
    this.renderer.removeClass(document.body, "campl-navigation-open");
  }

  openBodyNav(){
    this.renderer.addClass(document.body, "campl-navigation-open");
  }

  toggleBodyNav() {
    let id: string = (!this.menu_open)? this.myidnav : "NOTSET";
    this.primary_comp.sendId(id);
  }

  toggleSearch() {
      console.log("toggle search")
    let id: string = (!this.search_open)? this.myidsearch : "NOTSET";
    this.primary_comp.sendId(id);
  }
}
