import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibCamplNgComponent } from "./campl-ngx.component";
import { CamplNgComponent } from "./campl-ngx/campl-ngx.component";
import { CamplNgHeaderComponent } from "./campl-ngx-header/campl-ngx-header.component";
import { CamplNgLocalfooterComponent } from "./campl-ngx-localfooter/campl-ngx-localfooter.component";
import { CamplNgContentComponent } from "./campl-ngx-content/campl-ngx-content.component";
import { CamplNgFooterComponent } from "./campl-ngx-footer/campl-ngx-footer.component";
import { CamplNgNavComponent } from "./campl-ngx-nav/campl-ngx-nav.component";
import { CamplNgTitlenavComponent } from "./campl-ngx-titlenav/campl-ngx-titlenav.component";

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
import { CamplNgMessagesComponent } from "./campl-ngx-messages/campl-ngx-messages.component";
import { CamplNgQuicklinksComponent } from "./campl-ngx-quicklinks/campl-ngx-quicklinks.component";
import { CamplNgTableComponent } from "./campl-ngx-table/campl-ngx-table.component";
import { CamplNgWrapDirective } from "./components/campl-ngx-wrap.directive";
import { CamplNgLocalnavMenuComponent } from "./campl-ngx-localnav-menu/campl-ngx-localnav-menu.component";

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
