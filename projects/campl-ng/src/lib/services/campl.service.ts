import { Injectable, Inject } from "@angular/core";
import { CamplConfigService } from "./campl-config.service";
//import { NavMenu } from "../models/nav-menu";
//import { NavMenuConfigService } from "./nav-menu-config.service";

@Injectable()
export class CamplService {
  private config: any; // TODO provide structure - devise an interface

  constructor(@Inject(CamplConfigService) private iconfig) {
    this.config = iconfig;

    // some brief tests here to check what has been sent
    // TODO2 place these checking into a config class / object
    // TODO1 implement below by looping though an array of expected attributes
    //       (these attributes do not have default values)
    // TODO write this to recurse a tree eg 'local_footer' => ['col1','col2','col3','col4']
    // strings
    ["page_title"].forEach(key => {
      if (!this.config[key]) this.config[key] = "Set config" + key + "!";
    });
    // arrays:
    [
      "local_footer_col1",
      "local_footer_col2",
      "local_footer_col3",
      "local_footer_col4"
    ].forEach(key => {
      if (!this.config[key]) this.config[key] = [];
    });
    //if (!this.config.page_title)
    //  this.config.page_title = "Set config.page_title !";
  }
  public getConfig(): any {
    return this.config;
  }
}
