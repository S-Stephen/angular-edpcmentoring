import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { ProjectlightNgComponent } from "./projectlight/projectlight-ng/projectlight-ng.component";
import { ProjectlightNgContentComponent } from "./projectlight/projectlight-ng-content/projectlight-ng-content.component";
import { ProjectlightNgHeaderComponent } from "./projectlight/projectlight-ng-header/projectlight-ng-header.component";
import { ProjectlightNgFooterComponent } from "./projectlight/projectlight-ng-footer/projectlight-ng-footer.component";
import { ProjectlightNgLocalfooterComponent } from "./projectlight/projectlight-ng-localfooter/projectlight-ng-localfooter.component";
import { ProjectlightNgTitlenavComponent } from "./projectlight/projectlight-ng-titlenav/projectlight-ng-titlenav.component";
import { ProjectlightNgNavComponent } from "./projectlight/projectlight-ng-nav/projectlight-ng-nav.component";
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

// below requires HTTP_INTERCEPTORS from @angular/common/http
import { HttpErrorInterceptor } from "./http-error.interceptor";

import { MessageBufferService } from "./services/message-buffer.service";
import { MessagesComponent } from "./messages/messages.component";
import { MatchMentorWithMenteeDialogComponent } from "./match/match-mentor-with-mentee-dialog/match-mentor-with-mentee-dialog.component";
import { MatchMenteeWithMentorDialogComponent } from "./match/match-mentee-with-mentor-dialog/match-mentee-with-mentor-dialog.component";
import { ActionInvitesComponent } from './match/action-invites/action-invites.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectlightNgComponent,
    ProjectlightNgContentComponent,
    ProjectlightNgHeaderComponent,
    ProjectlightNgFooterComponent,
    ProjectlightNgLocalfooterComponent,
    ProjectlightNgTitlenavComponent,
    ProjectlightNgNavComponent,
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
    BrowserAnimationsModule
  ],
  providers: [
    MessageBufferService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [ProjectlightNgComponent],
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
