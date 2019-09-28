import { Component, OnInit } from "@angular/core";
import { CamplService } from "../services/campl.service";

@Component({
  selector: "campl-ng-localfooter",
  templateUrl: "./campl-ng-localfooter.component.html",
  styleUrls: ["./campl-ng-localfooter.component.css"]
})
export class CamplNgLocalfooterComponent implements OnInit {
  public config: any;
  // TODO change these to Menu objects (link and label)
  public col1: any;
  public col2: any;
  public col3: any;
  public col4: any;
  constructor(public campl_config: CamplService) {}

  ngOnInit() {
    this.config = this.campl_config.getConfig();
    this.col1 = this.config.local_footer_col1;
    this.col2 = this.config.local_footer_col2;
    this.col3 = this.config.local_footer_col3;
    this.col4 = this.config.local_footer_col4;
  }
}
