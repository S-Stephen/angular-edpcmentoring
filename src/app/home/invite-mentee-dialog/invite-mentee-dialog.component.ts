import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Seeker } from "../../classes/seeker";
import { Member } from "../../classes/member";
import { Relationship } from "../../classes/relationship";
import { MenteesService } from "app/services/mentees.service";
import { AvailableMenteesService } from "app/services/available-mentees.service";
import { Observable } from "rxjs";
import { combineLatest, map } from "rxjs/operators";
import { InvitationsService } from "app/services/invitations.service";
import { UserService } from "app/services/user.service";

@Component({
  selector: "men-invite-mentee-dialog",
  templateUrl: "./invite-mentee-dialog.component.html",
  styleUrls: ["./invite-mentee-dialog.component.css"]
})
export class InviteMenteeDialogComponent implements OnInit {
  available_mentees$: Observable<Seeker[]>;
  selected_for_invite: Seeker; // used to toggle view status

  constructor(
    public dialogRef: MatDialogRef<InviteMenteeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Relationship[],
    private menteesService: MenteesService,
    private availableMenteesService: AvailableMenteesService,
    private invitationsService: InvitationsService,
    private userService: UserService
  ) {
    this.available_mentees$ = this.availableMenteesService.response.pipe(
      combineLatest(
        this.userService.response$,
        this.menteesService.response$,
        this.invitationsService.response$
      ),
      map(([avail, user, curr, invs]) =>
        avail.filter(
          avail =>
            !curr.map(o => o.mentee.id).includes(avail.user.id) &&
            avail.user.id != user.id &&
            !invs.map(o => o.mentor.id).includes(avail.user.id) &&
            !invs.map(o => o.mentee.id).includes(avail.user.id)
        )
      )
    );
  }

  ngOnInit() {
    //this.getMentorRelationships();
    this.availableMenteesService.fetchAvailableMentees();
  }
  public cancel() {
    // close this window without any action
    this.dialogRef.close();
  }

  public selectForInvite(selected: Seeker) {
    this.selected_for_invite = selected;
  }

  public inviteMentee(mentee: Seeker) {
    event.stopPropagation();
    //console.log("invite mentor " + mentee.user.name());
    // TODO it would be better for the invitations to self heal!
    this.availableMenteesService.inviteMentee(mentee).subscribe(() => {
      this.availableMenteesService.fetchAvailableMentees();
      this.invitationsService.fetchMyInvitations();
    });
    //then close once the invite has happened?
    // TODO unsubscribe!!!
    this.dialogRef.close();
    // trigger the service event to send an invite
  }
}
