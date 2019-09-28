import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/services/user.service";
import { Currentuser } from "app/classes/currentuser";

@Component({
  selector: "men-mentee-preferences",
  templateUrl: "./mentee-preferences.component.html",
  styleUrls: ["./mentee-preferences.component.css"]
})
export class MenteePreferencesComponent implements OnInit {
  preferences: string; // no point if we are retrieving Currentuser!
  @Input("preferences-default") default: string;

  currentUser: Currentuser;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.response$.subscribe(user => {
      this.currentUser = user;
      let reqs = this.currentUser.mentorship_preferences.mentee_requirements;
      /** console.log(
        "updated currentUser default: " +
          this.default +
          " reqs: " +
          reqs +
          "prefs: " +
          this.preferences
      );*/
      this.preferences = reqs ? reqs : this.default;
      /**console.log(
        "updated currentUser 2 default: " +
          this.default +
          " reqs: " +
          reqs +
          "prefs: " +
          this.preferences
      );*/
    });
    this.userService.fetchCurrent();
    if (!this.preferences) this.preferences = this.default ? this.default : "";
  }
  updatePreferences(newcontent: string) {
    if (newcontent != this.preferences) {
      /** console.log(
        "update the users preferences!: " +
          newcontent +
          " != " +
          this.preferences +
          " default: " +
          this.default
      );*/
      this.userService.updateMenteePreferences(this.currentUser, newcontent);

      // this.userService.fetchCurrent(); though would this update elsewhere too?
      // we should call the service to update the preferences
      // will fetchCurrent update all other components (ie our parent?)
    }
  }
}
