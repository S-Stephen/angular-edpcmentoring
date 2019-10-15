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
import { environment } from "../environments/environment";
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
    //ProjectlightModule,
    // perhaps slurp this from a site.config file or elsewhere?
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
        { link: "http://www.cam.ac.uk/for-staff", label: "For staff" },
        {
          link: "http://www.cam.ac.uk/current-students",
          label: "For current students"
        },
        { link: "http://www.alumni.cam.ac.uk", label: "For alumni" },
        { link: "http://www.cam.ac.uk/for-business", label: "For business" },
        {
          link: "http://www.cam.ac.uk/colleges-and-departments",
          label: "Colleges & departments"
        },
        {
          link: "http://www.lib.cam.ac.uk/libraries/",
          label: "Libraries & facilities"
        },
        {
          link: "http://www.cam.ac.uk/museums-and-collections",
          label: "Museums & collections"
        },
        {
          link: "http://www.cam.ac.uk/email-and-phone-search",
          label: "Email & phone search"
        }
      ],
      // it is assumed that a top tier label without a link navigates to a lower menu
      // we could do with a better model here:
      // eg anchor ids should be produced dynamically
      // we could use a calss / interface
      global_nav: [
        {
          label: "Study at Cambridge",
          link: "http://www.cam.ac.uk/study-at-cambridge",
          anchor: "studyatcambridge",
          sub: [
            {
              label: "Undergraduate",
              link: "http://www.study.cam.ac.uk/undergraduate/",
              sub: [
                {
                  label: "Course",
                  link: "http://www.undergraduate.study.cam.ac.uk/courses"
                },
                {
                  label: "Applying",
                  link: "http://www.undergraduate.study.cam.ac.uk/applying"
                },
                {
                  label: "Events and open days",
                  link: "http://www.undergraduate.study.cam.ac.uk/events"
                },
                {
                  label: "Fees and Finances",
                  link: "http://www.undergraduate.study.cam.ac.uk/financess"
                },
                {
                  label: "Student blogs and videos",
                  link: "http://www.becambridge.com/"
                }
              ]
            },
            {
              label: "Graduate",
              link: "http://www.graduate.study.cam.ac.uk",
              sub: [
                {
                  label: "Why Cambridge",
                  link:
                    "http://www.graduate.study.cam.ac.uk/why-cambridge/welcome-vice-chancellor"
                },
                {
                  label: "How to apply",
                  link: "http://www.graduate.study.cam.ac.uk/how-do-i-apply"
                },
                {
                  label: "Fees and funding",
                  link:
                    "http://www.cambridgestudents.cam.ac.uk/fees-and-funding"
                },
                {
                  label: "Frequently asked questions",
                  link: "http://www.graduate.study.cam.ac.uk/faqs/applicant"
                }
              ]
            },
            {
              label: "International students",
              link: "http://www.internationalstudents.cam.ac.uk"
            },
            {
              label: "Continuing education",
              link: "http://www.ice.cam.ac.uk"
            },
            {
              label: "Executive and professional education",
              link: "http://www.epe.admin.cam.ac.uk/"
            },
            {
              label: "Courses in education",
              link: "http://www.educ.cam.ac.uk"
            }
          ]
        },
        {
          label: "About the University",
          link: "http://www.cam.ac.uk/about-the-university",
          anchor: "abouttheuniversity",
          sub: [
            [
              //arrays of arrays to be split campl-column4
              // each array is a column
              {
                label: "How the University and Colleges work",
                link:
                  "http://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work"
              },
              {
                label: "History",
                link: "http://www.cam.ac.uk/about-the-university/history"
              },
              {
                label: "Visiting the University",
                link:
                  "http://www.cam.ac.uk/about-the-university/visiting-the-university"
              },
              {
                label: "Term dates and calendars",
                link:
                  "http://www.cam.ac.uk/about-the-university/term-dates-and-calendars"
              },
              {
                label: "Map",
                link: "http://map.cam.ac.uk"
              }
            ],
            [
              {
                label: "For media",
                link: "http://www.communications.cam.ac.uk/"
              },
              {
                label: "Video and audio",
                link: "http://www.cam.ac.uk/video-and-audio"
              },
              {
                label: "Find an expert",
                link: "http://webservices.admin.cam.ac.uk/fae/"
              },
              {
                label: "Publications",
                link: "http://www.cam.ac.uk/about-the-university/publications"
              },
              {
                label: "Global Cambridge",
                link: "http://www.cam.ac.uk/global-cambridge"
              }
            ],
            [
              { link: "http://www.cam.ac.uk/news", label: "News" },
              {
                link: "http://www.admin.cam.ac.uk/whatson/",
                label: "Events"
              },
              {
                link: "http://www.cam.ac.uk/public-engagement",
                label: "Public engagement"
              },
              {
                link: "http://www.jobs.cam.ac.uk",
                label: "Jobs"
              },
              {
                link: "https://philanthropy.cam.ac.uk",
                label: "Give to Cambridge"
              }
            ]
          ]
        },
        {
          label: "Research at Cambridge",
          link: "http://www.cam.ac.uk/research"
        }
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
  entryComponents: []
})
export class AppModule {}
