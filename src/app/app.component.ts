import { Component, OnInit } from "@angular/core";

import { UserService } from "./services/user.service";
import { Currentuser } from "./classes/currentuser";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

// fix this (ie the import of the development library)
import { NavMenu } from "../../projects/campl-ng/src/lib/models/nav-menu";
import { NavMenuItem } from "../../projects/campl-ng/src/lib/models/nav-menu-item";

// used to build the navigation observable - debugging
import { of } from "rxjs";
// example of jquery import: https://stackblitz.com/edit/angular-wrap-jquery
//import $ from 'jquery';
//(or)
//https://github.com/angular/angular-cli/wiki/stories-third-party-lib
// imported via build scripts - so globally available
//declare var $: any;

//import Modernizr from 'modernizr';
// again cf jquery Modernizr imported as global via architec->build->scripts
declare var Modernizr: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  //nav_menu = { subMenus: [], title: "Test first menu" };
  nav_menu$: Observable<NavMenu>;
  headings$: Observable<any[]>;
  content$: Observable<any[]>;

  // We could have the applicaton return the list of navigation menus - but this would break seperation of concerns!
  //currentUser$: Observable<Currentuser>; // from this we will generate a NavMenus Observable

  constructor(private userService: UserService) {
    //this.nav_menu$ = of("test observable menu");
    //this.currentUser$ = this.userService.response$;
    //this.userService$ = this.userService.response$;
  }

  ngOnInit() {
    // create and subscribe to the user service - (move from the home app)
    //this.userService.response$.subscribe(user => (this.currentUser = user));
    //this.runJquery(); added to provide debugging but we shouldn't manipulate the DOM!
    this.userService.fetchCurrent();
    // TODO place this in its own service
    this.nav_menu$ = this.userService.response$.pipe(
      map(user => {
        /*let nm: NavMenu = {
          title: "Navigation Menu goes here",
          subMenu: []
        };
        return nm;*/
        //return { title: "some title", subMenu: [] };

        //user.first_name = "modified";
        let mHome: NavMenuItem = {
          label: "Home",
          link: "/home/",
          subItems: []
        };
        let mMatch: NavMenuItem = {
          label: "Match mentor and mentees",
          link: "/match/",
          subItems: []
        };
        let mAdmin: NavMenuItem = {
          label: "Admin",
          link: "/admin",
          subItems: []
        };
        let mLogout: NavMenuItem = {
          label: user.last_name + " (" + user.username + ")",
          link: "",
          subItems: [
            { label: "Log out", link: "/accounts/logout/", subItems: [] }
          ]
        };
        let nm: NavMenu = {
          title: "Navigation Menu",
          subMenus: [mHome, mMatch, mAdmin, mLogout]
        };
        return nm;
      })
    );

    // set content of the table
    //
    //
    this.headings$ = of([
      [{ value: "heading1" }, { value: "heading2" }, { value: "heading3" }]
    ]);
    this.content$ = of([
      [{ value: "row1 col1" }, { value: "row1 col2" }, { value: "row1 col3" }],
      [{ value: "row2 col1" }, { value: "row2 col2" }, { value: "row2 col3" }]
    ]);
  }
}
