import { Component, OnInit } from "@angular/core";
import { CamplService } from "../services/campl.service";

@Component({
  selector: "campl-ng-header",
  templateUrl: "./campl-ng-header.component.html",
  styleUrls: ["./campl-ng-header.component.css"]
})
export class CamplNgHeaderComponent implements OnInit {
  constructor(public campl_config: CamplService) {}

  public config: any;
  // TODO change these to Menu objects (link and label)
  public quicklinks: any;

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    this.quicklinks = this.config.quicklinks;}
}
