import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Invitation } from "app/classes/invitation";
import { InvitationsService } from "app/services/invitations.service";
import { MentorsService } from "../../services/mentors.service";
import { AvailableMentorsService } from "app/services/available-mentors.service";
import { Observable } from "rxjs";

@Component({
  selector: "men-action-mentee-invite-dialog",
  templateUrl: "./action-mentee-invite-dialog.component.html",
  styleUrls: ["./action-mentee-invite-dialog.component.css"]
})
export class ActionMenteeInviteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ActionMenteeInviteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<Invitation[]>,
    private invitationsService: InvitationsService,
    private mentorsService: MentorsService,
    private availableMentorsService: AvailableMentorsService
  ) {}

  ngOnInit() {}

  public acceptInvite(event: any, inv: Invitation) {
    event.stopPropagation();
    //console.log("accept invite from a mentor" + inv.id);
    this.invitationsService.acceptMenteeInvitation(inv).subscribe(inv => {
      //console.log("invitation accepted - update invitations and relationships");
      // TODO require better method to handle this! - (updating the db changes)
      this.invitationsService.fetchMyInvitations();
      this.availableMentorsService.fetchAvailableMentors();
      this.mentorsService.fetchMentorRelationships();

      this.dialogRef.close();
    });
  }
  public declineInvite(event: any, inv: Invitation) {
    event.stopPropagation();
    //console.log("accept invite from a mentor" + inv.id);
    this.invitationsService.declineMenteeInvitation(inv).subscribe(inv => {
      //console.log("invitation declined - update invitations and relationships");
      // TODO require better method to handle this! - (updating the db changes)
      this.invitationsService.fetchMyInvitations();
      //may not need below -> combineLatest?
      this.availableMentorsService.fetchAvailableMentors();
      // no need for this one
      // this.mentorsService.fetchMentorRelationships();

      this.dialogRef.close();
    });
  }
}
