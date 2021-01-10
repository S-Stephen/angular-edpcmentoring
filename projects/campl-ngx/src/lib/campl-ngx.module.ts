import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibCamplNgxComponent } from './campl-ngx.component';
import { CamplNgxComponent } from './campl-ngx-app/campl-ngx-app.component';
import { CamplNgxHeaderComponent } from './campl-ngx-header/campl-ngx-header.component';
import { CamplNgxLocalfooterComponent } from './campl-ngx-localfooter/campl-ngx-localfooter.component';
import { CamplNgxContentComponent } from './campl-ngx-content/campl-ngx-content.component';
import { CamplNgxFooterComponent } from './campl-ngx-footer/campl-ngx-footer.component';
import { CamplNgxNavComponent } from './campl-ngx-nav/campl-ngx-nav.component';
import { CamplNgxTitlenavComponent } from './campl-ngx-titlenav/campl-ngx-titlenav.component';

// pattern from:
// https://medium.com/@michelestieven/angular-writing-configurable-modules-69e6ea23ea42

import { InjectionToken, ModuleWithProviders } from '@angular/core';

import { CamplConfigService } from './services/campl-config.service';
import { CamplService } from './services/campl.service';
import { NavMenu } from './models/nav-menu';
// import { NavMenuItem } from './models/nav-menu-item';

/*
import { NavMenuConfigService } from './services/nav-menu-config.service';
import { NavMenuService } from './services/nav-menu.service';
import { NavMenu } from './models/nav-menu';
// import { NavMenuItem } from './models/nav-menu-item'; */

import { BrowserModule } from '@angular/platform-browser';
import { TopListHoverDirective } from './components/top-list-hover.directive';
import { CamplNgxMessagesComponent } from './campl-ngx-messages/campl-ngx-messages.component';
import { CamplNgxQuicklinksComponent } from './campl-ngx-quicklinks/campl-ngx-quicklinks.component';
import { CamplNgxTableComponent } from './campl-ngx-table/campl-ngx-table.component';
import { CamplNgxWrapDirective } from './components/campl-ngx-wrap.directive';
import { CamplNgxLocalnavMenuComponent } from './campl-ngx-localnav-menu/campl-ngx-localnav-menu.component';
import { CamplNgxMessageComponent } from './campl-ngx-message/campl-ngx-message.component';
import { CamplNgxRegSelectComponent } from './campl-ngx-input/reg-select/reg-select.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { CamplNgxEmailInputComponent } from './campl-ngx-input/email-input/email-input.component';
import { CamplNgxDateSelectComponent } from './campl-ngx-input/date-select/date-select.component';
import { CamplNgxAutocompleteComponent } from './campl-ngx-input/autocomplete/autocomplete.component';
import { CamplNgxTextInputComponent } from './campl-ngx-input/text/text.component';
import { CamplNgxTextareaComponent } from './campl-ngx-input/textarea/textarea.component';
import { CamplNgxSnackbarComponent } from './campl-ngx-snackbar/campl-ngx-snackbar.component';
import { CamplNgxPageNavComponent } from './campl-ngx-page-nav/campl-ngx-page-nav.component';

// Service to load the jQuery IIFE
// import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';

@NgModule({
  declarations: [
    LibCamplNgxComponent,
    CamplNgxComponent,
    CamplNgxHeaderComponent,
    CamplNgxLocalfooterComponent,
    CamplNgxContentComponent,
    CamplNgxFooterComponent,
    CamplNgxNavComponent,
    CamplNgxTitlenavComponent,
    TopListHoverDirective,
    CamplNgxMessagesComponent,
    CamplNgxQuicklinksComponent,
    CamplNgxTableComponent,
    CamplNgxWrapDirective,
    CamplNgxLocalnavMenuComponent,
    CamplNgxMessageComponent,
    CamplNgxRegSelectComponent,
    CamplNgxEmailInputComponent,
    CamplNgxDateSelectComponent,
    CamplNgxAutocompleteComponent,
    CamplNgxTextInputComponent,
    CamplNgxTextareaComponent,
    CamplNgxSnackbarComponent,
    CamplNgxPageNavComponent
  ],
  // todo: these should be peer dependancies?
  imports: [BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule],
  exports: [
    LibCamplNgxComponent,
    CamplNgxComponent,
    CamplNgxHeaderComponent,
    CamplNgxLocalfooterComponent,
    CamplNgxContentComponent,
    CamplNgxFooterComponent,
    CamplNgxNavComponent,
    CamplNgxTitlenavComponent,
    CamplNgxMessagesComponent,
    CamplNgxMessageComponent,
    CamplNgxTableComponent,
    CamplNgxRegSelectComponent,
    CamplNgxEmailInputComponent,
    CamplNgxDateSelectComponent,
    CamplNgxAutocompleteComponent,
    CamplNgxTextInputComponent,
    CamplNgxTextareaComponent,
    CamplNgxSnackbarComponent,
    CamplNgxPageNavComponent
  ]
})
export class CamplNgxModule {
  // TODO lookup ModuleWithProviders
  static setConfig(camplConfig: any): ModuleWithProviders<CamplNgxModule> {
    // TODO
    // if camplConfig not set
    // search for a config json file in a standard location perhaps app root
    // else
    // set to some default
    // camplConfig = camplConfigDefaults();

    // This will pass config settings to our campl template
    // These are passed via an InjectionToken which will not
    // provide the ability to send dynamic values
    return {
      ngModule: CamplNgxModule,
      providers: [
        CamplService,
        {
          provide: CamplConfigService,
          useValue: camplConfig
        }
      ]
      /*      static forRoot(navMenu: NavMenu): ModuleWithProviders {
        return {
          ngModule: CamplNgxModule,
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
