import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RoutingModule } from "./routes/routing.module";

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

// below requires HTTP_INTERCEPTORS from @angular/common/http
import { HttpErrorInterceptor } from "./http-error.interceptor";

// reference: https://dev.to/sanidz/angular-http-mock-interceptor-for-mocked-backend-1h5g
// TODO chain mock-request interceptor onto http-error interceptor!
import { HttpMockRequestInterceptor } from "./http-mock-request-interceptor";
import { environment } from "../environments/environment";
export const isMock = environment.mock;

import { MessageBufferService } from "./services/message-buffer.service";
import { MessagesComponent } from "./messages/messages.component";

import { CamplNgxModule } from "campl-ngx";

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
  declarations: [AppComponent, ContenteditableDirective, MessagesComponent],
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
    CamplNgxModule.setConfig(environment.config)
    //ProjectlightModule,
    // perhaps slurp this from a site.config file or elsewhere?
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
  entryComponents: []
})
export class AppModule {}
