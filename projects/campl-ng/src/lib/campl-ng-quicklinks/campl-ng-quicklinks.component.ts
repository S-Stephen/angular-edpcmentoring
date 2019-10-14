import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import { CamplService } from "../services/campl.service";

@Component({
  selector: "campl-ng-quicklinks",
  templateUrl: "./campl-ng-quicklinks.component.html",
  styleUrls: ["./campl-ng-quicklinks.component.css"]
  // https://stackoverflow.com/questions/35712379/how-can-i-close-a-dropdown-on-click-outside
  //host: {
  //  "(document:click)": "onClick($event)"
  //}
})
export class CamplNgQuicklinksComponent implements OnInit {
  public config: any;
  // TODO change these to Menu objects (link and label)
  public quicklinks: any;
  public open_quicklinks: boolean = false;

  constructor(public campl_config: CamplService, private _eref: ElementRef) {}

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    this.quicklinks = this.config.quicklinks;
  }

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

  toggleList() {
    // this will add/remove campl-quicklinks-open class
    // another method would be to use with ng-template, but this may require css changes??
    this.open_quicklinks = !this.open_quicklinks;
  }
}
