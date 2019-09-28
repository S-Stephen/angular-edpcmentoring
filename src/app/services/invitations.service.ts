import { Injectable } from "@angular/core";
import { Invitation } from "../classes/invitation";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InvitationsService {
  myInvitesUrl: string = "api/myinvitations/";

  private responseSource = new BehaviorSubject<Invitation[]>([]);
  public response$ = this.responseSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchMyInvitations() {
    this.http
      .get<Invitation[]>(this.myInvitesUrl)
      .pipe(map(invs => invs.map(inv => new Invitation(inv))))
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  declineMenteeInvitation(inv) {
    return this.http.patch("api/invitations/" + inv.id + "/", {
      mentee_response: "D"
    });
  }
  acceptMenteeInvitation(inv) {
    return this.http.patch("api/invitations/" + inv.id + "/", {
      mentee_response: "A"
    });
  }
  declineMentorInvitation(inv) {
    return this.http.patch("api/invitations/" + inv.id + "/", {
      mentor_response: "D"
    });
  }
  acceptMentorInvitation(inv) {
    return this.http.patch("api/invitations/" + inv.id + "/", {
      mentor_response: "A"
    });
  }

  declineInvitation(inv) {
    if (inv.mentor_response == undefined)
      return this.declineMentorInvitation(inv);
    else return this.declineMenteeInvitation(inv);
  }
  acceptInvitation(inv) {
    if (inv.mentor_response == undefined)
      return this.acceptMentorInvitation(inv);
    else return this.acceptMenteeInvitation(inv);
  }

  addInvitation(inv) {
    //can be used to create a complete invitation to produce a relationship
    return this.http.post("api/mm/invitations/", inv);
  }

  handleError(error) {
    window.alert("an error occurred");
  }
}
