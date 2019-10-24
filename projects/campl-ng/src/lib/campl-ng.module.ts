import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibCamplNgComponent } from "./campl-ng.component";
import { CamplNgComponent } from "./campl-ng/campl-ng.component";
import { CamplNgHeaderComponent } from "./campl-ng-header/campl-ng-header.component";
import { CamplNgLocalfooterComponent } from "./campl-ng-localfooter/campl-ng-localfooter.component";
import { CamplNgContentComponent } from "./campl-ng-content/campl-ng-content.component";
import { CamplNgFooterComponent } from "./campl-ng-footer/campl-ng-footer.component";
import { CamplNgNavComponent } from "./campl-ng-nav/campl-ng-nav.component";
import { CamplNgTitlenavComponent } from "./campl-ng-titlenav/campl-ng-titlenav.component";

// pattern from:
// https://medium.com/@michelestieven/angular-writing-configurable-modules-69e6ea23ea42

import { InjectionToken, ModuleWithProviders } from "@angular/core";

import { CamplConfigService } from "./services/campl-config.service";
import { CamplService } from "./services/campl.service";
import { NavMenu } from "./models/nav-menu";
//import { NavMenuItem } from './models/nav-menu-item';

/*
import { NavMenuConfigService } from "./services/nav-menu-config.service";
import { NavMenuService } from "./services/nav-menu.service";
import { NavMenu } from "./models/nav-menu";
//import { NavMenuItem } from './models/nav-menu-item'; */

import { BrowserModule } from "@angular/platform-browser";
import { TopListHoverDirective } from "./components/top-list-hover.directive";
import { CamplNgMessagesComponent } from "./campl-ng-messages/campl-ng-messages.component";
import { CamplNgQuicklinksComponent } from "./campl-ng-quicklinks/campl-ng-quicklinks.component";
import { CamplNgTableComponent } from "./campl-ng-table/campl-ng-table.component";
import { CamplNgWrapDirective } from "./components/campl-ng-wrap.directive";
import { CamplNgLocalnavMenuComponent } from "./campl-ng-localnav-menu/campl-ng-localnav-menu.component";

// Service to load the jQuery IIFE
//import { DynamicScriptLoaderService } from "./services/dynamic-script-loader.service";

@NgModule({
  declarations: [
    LibCamplNgComponent,
    CamplNgComponent,
    CamplNgHeaderComponent,
    CamplNgLocalfooterComponent,
    CamplNgContentComponent,
    CamplNgFooterComponent,
    CamplNgNavComponent,
    CamplNgTitlenavComponent,
    TopListHoverDirective,
    CamplNgMessagesComponent,
    CamplNgQuicklinksComponent,
    CamplNgTableComponent,
    CamplNgWrapDirective,
    CamplNgLocalnavMenuComponent
  ],
  // todo: these should be peer dependancies?
  imports: [RouterModule, BrowserModule],
  exports: [
    LibCamplNgComponent,
    CamplNgComponent,
    CamplNgHeaderComponent,
    CamplNgLocalfooterComponent,
    CamplNgContentComponent,
    CamplNgFooterComponent,
    CamplNgNavComponent,
    CamplNgTitlenavComponent,
    CamplNgMessagesComponent,
    CamplNgTableComponent
  ]
})
export class CamplNgModule {
  // TODO lookup ModuleWithProviders
  static setConfig(camplConfig: any): ModuleWithProviders {
    // This will pass config settings to our campl template
    // These are passed via an InjectionToken which will not
    // provide the ability to send dynamic values
    return {
      ngModule: CamplNgModule,
      providers: [
        CamplService,
        {
          provide: CamplConfigService,
          useValue: camplConfig
        }
      ]
      /*      static forRoot(navMenu: NavMenu): ModuleWithProviders {
        return {
          ngModule: CamplNgModule,
      providers: [
        NavMenuService,
        {
          provide: NavMenuConfigService,
          useValue: navMenu
        }
      ] */
    };
  }
}
