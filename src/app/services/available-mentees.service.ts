import { Injectable } from "@angular/core";

import { Observable, throwError, BehaviorSubject } from "rxjs";

import { Seeker } from "../classes/seeker";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AvailableMenteesService {
  menteesSeekingListUrl = "api/seekrel/?mentee=true";
  menteeInviteUrl = "api/invitations/";

  private responseSource = new BehaviorSubject<Seeker[]>([]);
  public response = this.responseSource.asObservable();

  fetchAvailableMentees() {
    this.http
      .get<Seeker[]>(this.menteesSeekingListUrl)
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

  inviteMentee(mentee: Seeker) {
    //send an invitation to the mentor
    // on completion fetchAvailableMentors - update all observing
    return this.http.post("api/invitations/", { mentee: mentee.user.url });
  }

  constructor(private http: HttpClient) {}
}
