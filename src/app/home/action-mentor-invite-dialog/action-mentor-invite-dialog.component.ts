import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Invitation } from "app/classes/invitation";
import { InvitationsService } from "app/services/invitations.service";
import { MenteesService } from "../../services/mentees.service";
import { AvailableMenteesService } from "app/services/available-mentees.service";
import { Observable } from "rxjs";

@Component({
  selector: "men-action-mentor-invite-dialog",
  templateUrl: "./action-mentor-invite-dialog.component.html",
  styleUrls: ["./action-mentor-invite-dialog.component.css"]
})
export class ActionMentorInviteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ActionMentorInviteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<Invitation[]>,
    private invitationsService: InvitationsService,
    private menteesService: MenteesService,
    private availableMenteesService: AvailableMenteesService
  ) {}

  ngOnInit() {}

  public acceptInvite(event: any, inv: Invitation) {
    event.stopPropagation();
    //console.log("accept invite from a mentee" + inv.id);
    this.invitationsService.acceptMentorInvitation(inv).subscribe(inv => {
      //console.log("invitation accepted - update invitations and relationships");
      // TODO require better method to handle this! - (updating the db changes)
      this.invitationsService.fetchMyInvitations();
      this.availableMenteesService.fetchAvailableMentees();
      this.menteesService.fetchMenteeRelationships();

      this.dialogRef.close();
    });
  }
  public declineInvite(event: any, inv: Invitation) {
    event.stopPropagation();
    //console.log("accept invite from a mentee" + inv.id);
    this.invitationsService.declineMentorInvitation(inv).subscribe(inv => {
      //console.log("invitation declined - update invitations and relationships");
      // TODO require better method to handle this! - (updating the db changes)
      this.invitationsService.fetchMyInvitations();
      //may not need below -> combineLatest?
      this.availableMenteesService.fetchAvailableMentees();
      // no need for this one
      // this.mentorsService.fetchMentorRelationships();

      this.dialogRef.close();
    });
  }
}
