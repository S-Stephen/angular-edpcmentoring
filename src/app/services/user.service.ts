import { Injectable } from "@angular/core";

import { Observable, throwError, ReplaySubject } from "rxjs";

//import { Member } from "../classes/member";
//import { MEMBERS } from "../mock-members";
import { Currentuser } from "../classes/currentuser";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUrl = "/api/current/";

  private responseSource = new ReplaySubject<Currentuser>(1);
  public response$ = this.responseSource.asObservable();

  fetchCurrent() {
    this.http
      .get<Currentuser>(this.currentUrl)
      .pipe(
        map(curr => {
          return new Currentuser(curr[0]);
        })
      )
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  toggleSearchingMentor(myuser) {
    myuser.mentorship_preferences.is_seeking_mentor = myuser
      .mentorship_preferences.is_seeking_mentor
      ? false
      : true;
    return this.http
      .put<Currentuser>("/api/users/" + myuser.id + "/", myuser)
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  toggleSearchingMentee(myuser) {
    myuser.mentorship_preferences.is_seeking_mentee = myuser
      .mentorship_preferences.is_seeking_mentee
      ? false
      : true;
    return this.http
      .put<Currentuser>("/api/users/" + myuser.id + "/", myuser)
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  updateMentorPreferences(myuser, preferences) {
    myuser.mentorship_preferences.mentor_requirements = preferences;
    // TODO: This needs converting to patch and limitations need to be put on which fields are mutable
    this.http
      .put<Currentuser>("/api/users/" + myuser.id + "/", myuser)
      .pipe(
        map(curr => {
          return new Currentuser(curr);
        })
      )
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  updateMenteePreferences(myuser, preferences) {
    myuser.mentorship_preferences.mentee_requirements = preferences;
    // TODO: This needs converting to patch and limitations need to be put on which fields are mutable
    this.http
      .put<Currentuser>("/api/users/" + myuser.id + "/", myuser)
      .pipe(
        map(curr => {
          return new Currentuser(curr);
        })
      )
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }
  constructor(private http: HttpClient) {}
}
