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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FormfieldsComponent } from './examples/formfields/formfields.component';

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
  declarations: [AppComponent, ContenteditableDirective, MessagesComponent, HomeComponent, TableComponent, FormfieldsComponent],
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
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
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
export class AppModule { }
