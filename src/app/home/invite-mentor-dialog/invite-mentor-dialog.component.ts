import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Seeker } from "../../classes/seeker";
import { Member } from "../../classes/member";
import { Relationship } from "../../classes/relationship";
import { MentorsService } from "app/services/mentors.service";
import { AvailableMentorsService } from "app/services/available-mentors.service";
import { Observable } from "rxjs";
import { combineLatest, map } from "rxjs/operators";
import { InvitationsService } from "app/services/invitations.service";
import { UserService } from "app/services/user.service";

@Component({
  selector: "men-invite-mentor-dialog",
  templateUrl: "./invite-mentor-dialog.component.html",
  styleUrls: ["./invite-mentor-dialog.component.css"]
})
export class InviteMentorDialogComponent {
  available_mentors$: Observable<Seeker[]>;
  selected_for_invite: Seeker; // used to toggle view status

  constructor(
    public dialogRef: MatDialogRef<InviteMentorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Relationship[],
    private mentorsService: MentorsService,
    private availableMentorsService: AvailableMentorsService,
    private invitationsService: InvitationsService,
    private userService: UserService
  ) {
    // TODO filter the available_mentor lists with those who are not currently in a relationship with this user
    //this.available_mentors$ = this.availableMentorsService.response;
    //filter the available mentors:
    //exclude those who this user is in an invitation with
    //exclude those who the user is in a relationship with
    this.available_mentors$ = this.availableMentorsService.response.pipe(
      combineLatest(
        this.userService.response$,
        this.mentorsService.response,
        this.invitationsService.response$
      ),
      map(([avail, user, curr, invs]) =>
        avail.filter(
          avail =>
            !curr.map(o => o.mentor.id).includes(avail.user.id) &&
            avail.user.id != user.id &&
            !invs.map(o => o.mentee.id).includes(avail.user.id) &&
            !invs.map(o => o.mentor.id).includes(avail.user.id)
        )
      )
    );
  }

  ngOnInit() {
    //this.getMentorRelationships();
    this.availableMentorsService.fetchAvailableMentors();
  }

  public cancel() {
    // close this window without any action
    this.dialogRef.close();
  }

  public selectForInvite(selected: Seeker) {
    this.selected_for_invite = selected;
  }

  public inviteMentor(mentor: Seeker) {
    event.stopPropagation();
    //console.log("invite mentor " + mentor.user.name());
    // TODO it would be better for the invitations to self heal!
    this.availableMentorsService.inviteMentor(mentor).subscribe(() => {
      this.availableMentorsService.fetchAvailableMentors();
      this.invitationsService.fetchMyInvitations();
    });
    //then close once the invite has happened?
    // TODO unsubscribe!!!
    this.dialogRef.close();
    // trigger the service event to send an invite
  }
}
