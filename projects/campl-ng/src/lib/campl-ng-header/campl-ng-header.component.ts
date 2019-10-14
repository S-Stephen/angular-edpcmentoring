import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";

@Component({
  selector: "campl-ng-header",
  templateUrl: "./campl-ng-header.component.html",
  styleUrls: ["./campl-ng-header.component.css"]
})
export class CamplNgHeaderComponent implements OnInit, OnDestroy {
  menu_open: boolean = false;
  search_open: boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.menu_open) {
      this.renderer.removeClass(document.body, "campl-navigation-open");
    }
  }

  toggleBodyNav() {
    // When actioned will add/remove the css class campl-navigation-open to the body element
    // https://stackoverflow.com/questions/43542373/angular2-add-class-to-body-tag
    this.menu_open = !this.menu_open;
    if (this.menu_open) {
      this.renderer.addClass(document.body, "campl-navigation-open");
    } else {
      this.renderer.removeClass(document.body, "campl-navigation-open");
    }
  }

  toggleSearch() {
    this.search_open = !this.search_open;
    if (this.search_open && this.menu_open) {
      this.toggleBodyNav();
    }
  }
  /* work in progress - how do we close the search menu and other menus!
   Idea -> global variable/service for active menu?
  //https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component
  @HostListener("document:click", ["$event"])
  onClick(event) {
    if (
      !this._eref.nativeElement.contains(event.target) &&
      this.open_quicklinks
    ) {
      // or some similar check
      this.open_quicklinks = false;
      console.log("closed our list");
    }
  }
  */
}
