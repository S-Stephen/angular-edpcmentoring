import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Currentuser } from "../../classes/currentuser";

@Component({
  selector: "men-mentor-preferences",
  templateUrl: "./mentor-preferences.component.html",
  styleUrls: ["./mentor-preferences.component.css"]
})
export class MentorPreferencesComponent implements OnInit {
  preferences: string; // no point if we are retrieving Currentuser!
  @Input("preferences-default") default: string;

  currentUser: Currentuser;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.response$.subscribe(user => {
      this.currentUser = user;
      let reqs = this.currentUser.mentorship_preferences.mentor_requirements;
      this.preferences = reqs ? reqs : this.default;
    });
    this.userService.fetchCurrent();
    if (!this.preferences) this.preferences = this.default ? this.default : "";
  }
  updatePreferences(newcontent: string) {
    if (newcontent != this.preferences) {
      this.userService.updateMentorPreferences(this.currentUser, newcontent);

      // this.userService.fetchCurrent(); though would this update elsewhere too?
      // we should call the service to update the preferences
      // will fetchCurrent update all other components (ie our parent?)
    }
  }
}
