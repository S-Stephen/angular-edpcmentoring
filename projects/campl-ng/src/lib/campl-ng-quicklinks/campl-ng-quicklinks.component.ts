import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import { CamplService } from "../services/campl.service";
import { CamplNgPrimaryMenuStateService } from "../services/campl-ng-primary-menu-state.service";

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
  public open_quicklinks: boolean = false; // used to toggle template
  // there is opportunity here to create a new class/interface with this field as reflection and the injection of the MenuService
  public myid: string = "CamplNgQuicklinksComponent";

  constructor(
    public primary_comp: CamplNgPrimaryMenuStateService,
    public campl_config: CamplService,
    private _eref: ElementRef
  ) {}

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    this.quicklinks = this.config.quicklinks;
    this.primary_comp.id$.subscribe(id => {
      if (id == this.myid) {
        this.open_quicklinks = true;
      } else {
        this.open_quicklinks = false;
      }
    });
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
      // We may have clicked on a different component, we do not wish to close that component
      //this.primary_comp.sendId("NOTSET"); // a reserved component name! if creating interface we must check for this!
    }
  }

  toggleList() {
    // this will add/remove campl-quicklinks-open class
    // another method would be to use with ng-template, but this may require css changes??
    if (!this.open_quicklinks) {
      this.primary_comp.sendId(this.myid);
    } else {
      this.primary_comp.sendId("NOTSET");
    }

    //this.open_quicklinks = !this.open_quicklinks;
  }
}
