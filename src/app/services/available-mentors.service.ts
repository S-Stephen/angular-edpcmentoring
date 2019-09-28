import { Injectable } from "@angular/core";

import { Observable, throwError, BehaviorSubject } from "rxjs";

import { Seeker } from "../classes/seeker";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AvailableMentorsService {
  mentorsSeekingListUrl = "api/seekrel/?mentor=true";
  mentorInviteUrl = "api/invitations/";

  private responseSource = new BehaviorSubject<Seeker[]>([]);
  public response = this.responseSource.asObservable();

  fetchAvailableMentors() {
    this.http
      .get<Seeker[]>(this.mentorsSeekingListUrl)
      .pipe(
        map(mens =>
          mens
            .map(men => new Seeker(men))
            .filter(mem => mem.user.cued_member.is_active)
        )
      )
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  inviteMentor(mentor: Seeker) {
    //send an invitation to the mentor
    // on completion fetchAvailableMentors - update all observing
    return this.http.post("api/invitations/", { mentor: mentor.user.url });
  }

  constructor(private http: HttpClient) {}
}
