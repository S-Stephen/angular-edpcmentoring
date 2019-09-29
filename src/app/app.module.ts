import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

//import { ProjectlightNgComponent } from "./projectlight/projectlight-ng/projectlight-ng.component";
//import { ProjectlightNgContentComponent } from "./projectlight/projectlight-ng-content/projectlight-ng-content.component";
//import { ProjectlightNgHeaderComponent } from "./projectlight/projectlight-ng-header/projectlight-ng-header.component";
//import { ProjectlightNgFooterComponent } from "./projectlight/projectlight-ng-footer/projectlight-ng-footer.component";
//import { ProjectlightNgLocalfooterComponent } from "./projectlight/projectlight-ng-localfooter/projectlight-ng-localfooter.component";
//import { ProjectlightNgTitlenavComponent } from "./projectlight/projectlight-ng-titlenav/projectlight-ng-titlenav.component";
//import { ProjectlightNgNavComponent } from "./projectlight/projectlight-ng-nav/projectlight-ng-nav.component";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "./routes/routing.module";
import { MatchComponent } from "./match/match.component";

// HttpClientXsrfModule -> https://stackoverflow.com/questions/18156452/django-csrf-token-angularjs
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { MentorslistComponent } from "./home/mentorslist/mentorslist.component";
import { MenteeslistComponent } from "./home/menteeslist/menteeslist.component";

import { DelMentorDialogComponent } from "./home/del-mentor-dialog/del-mentor-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DelMenteeDialogComponent } from "./home/del-mentee-dialog/del-mentee-dialog.component";
import { InviteMentorDialogComponent } from "./home/invite-mentor-dialog/invite-mentor-dialog.component";
import { InviteMenteeDialogComponent } from "./home/invite-mentee-dialog/invite-mentee-dialog.component";
import { ContenteditableDirective } from "./components/directives/contenteditable.directive";
import { MentorPreferencesComponent } from "./home/mentor-preferences/mentor-preferences.component";
import { MenteePreferencesComponent } from "./home/mentee-preferences/mentee-preferences.component";
import { ActionMenteeInviteDialogComponent } from "./home/action-mentee-invite-dialog/action-mentee-invite-dialog.component";
import { ActionMentorInviteDialogComponent } from "./home/action-mentor-invite-dialog/action-mentor-invite-dialog.component";

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
import { MatchMentorWithMenteeDialogComponent } from "./match/match-mentor-with-mentee-dialog/match-mentor-with-mentee-dialog.component";
import { MatchMenteeWithMentorDialogComponent } from "./match/match-mentee-with-mentor-dialog/match-mentee-with-mentor-dialog.component";
import { ActionInvitesComponent } from "./match/action-invites/action-invites.component";

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
    HomeComponent,
    MatchComponent,
    MentorslistComponent,
    MenteeslistComponent,
    DelMentorDialogComponent,
    DelMenteeDialogComponent,
    InviteMentorDialogComponent,
    InviteMenteeDialogComponent,
    ContenteditableDirective,
    MentorPreferencesComponent,
    MenteePreferencesComponent,
    ActionMenteeInviteDialogComponent,
    ActionMentorInviteDialogComponent,
    MessagesComponent,
    MatchMentorWithMenteeDialogComponent,
    MatchMenteeWithMentorDialogComponent,
    ActionInvitesComponent
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
    DelMentorDialogComponent,
    DelMenteeDialogComponent,
    InviteMentorDialogComponent,
    InviteMenteeDialogComponent,
    ActionMentorInviteDialogComponent,
    ActionMenteeInviteDialogComponent,
    MatchMentorWithMenteeDialogComponent,
    MatchMenteeWithMentorDialogComponent
  ]
})
export class AppModule {}
