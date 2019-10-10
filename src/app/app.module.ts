import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RoutingModule } from "./routes/routing.module";
// HttpClientXsrfModule -> https://stackoverflow.com/questions/18156452/django-csrf-token-angularjs
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContenteditableDirective } from "./components/directives/contenteditable.directive";

//import { ProjectlightModule } from "./projectlight/projectlight.module";

// below requires HTTP_INTERCEPTORS from @angular/common/http
import { HttpErrorInterceptor } from "./http-error.interceptor";

// reference: https://dev.to/sanidz/angular-http-mock-interceptor-for-mocked-backend-1h5g
// TODO chain mock-request interceptor onto http-error interceptor!
import { HttpMockRequestInterceptor } from "./http-mock-request-interceptor";
import { environment } from '../environments/environment';
export const isMock = environment.mock;


import { MessageBufferService } from "./services/message-buffer.service";
import { MessagesComponent } from "./messages/messages.component";
// why does import { CamplNgModule } from 'campl-ng'
// not work after ng build campl-ng has copied the
// files into dist?
// Todo: replace these with correct includes
import { CamplNgModule } from "../../projects/campl-ng/src/lib/campl-ng.module";
//import { NavMenu } from "../../projects/campl-ng/src/lib/models/nav-menu";
/**
 * config object to setup the menus we would like to see
 */
/* const navMenu: NavMenu = {
  title: "Navigation Menu",
  subMenus: [
    { label: "Home", link: "/home", subItems: [] },
    {
      label: "Match mentors and mentees",
      link: "/match",
      subItems: []
    },
    {
      label: "Admin interface",
      link: "/admin",
      subItems: []
    }
  ]
}; */

@NgModule({
  declarations: [
    AppComponent,
    ContenteditableDirective,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: "csrftoken",
      headerName: "X-CSRFToken"
    }),
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    //ProjectlightModule,
    CamplNgModule.setConfig({
      page_title: "EDPC Mentoring",
      local_footer_col1: [
        {
          label: "About the Scheme",
          link: "https://edpc.eng.cam.ac.uk/mentoring"
        }
      ],
      local_footer_col2: [
        { label: "About the EDPC", link: "https://edpc.eng.cam.ac.uk/aboutus" }
      ],
      quicklinks: [
        {link:"http://www.cam.ac.uk/for-staff", label: "For staff"},
        {link:"http://www.cam.ac.uk/current-students", label: "For current students"},
        {link:"http://www.alumni.cam.ac.uk", label:"For alumni"},
        {link:"http://www.cam.ac.uk/for-business",label:"For business"},
        {link:"http://www.cam.ac.uk/colleges-and-departments",label:"Colleges & departments"},
        {link:"http://www.lib.cam.ac.uk/libraries/",label:"Libraries & facilities"},
        {link:"http://www.cam.ac.uk/museums-and-collections",label:"Museums & collections"},
        {link:"http://www.cam.ac.uk/email-and-phone-search",label:"Email & phone search"}
      ]
    })
  ],
  providers: [
    MessageBufferService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  //bootstrap: [ProjectlightNgComponent],
  entryComponents: [
  ]
})
export class AppModule {}
