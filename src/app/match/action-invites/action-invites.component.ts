import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { Seeker } from "../../classes/seeker";
import { AvailableSeekersService } from "../../services/available-seekers.service";
import { InvitationsService } from "../../services/invitations.service";
import { Observable } from "rxjs";
import { Invitation } from "../../classes/invitation";

@Component({
  selector: "men-action-invites",
  templateUrl: "./action-invites.component.html",
  styleUrls: ["./action-invites.component.css"]
})
export class ActionInvitesComponent implements OnInit {
  // get the invites for the provided user and action them
  // these will be invites to be both mentor and mentee

  available_seekers_invs$: Observable<Invitation[]>;
  available_seekers_invs: Invitation[];
  @Input() seeker: Seeker;
  @Output() left_to_resolve = new EventEmitter<any>();
  resolved: number; // we can resolve by ignoring for the time being
  to_resolve: number;
  passed: number[]; // stores the id of passed invites

  constructor(
    private availableSeekersService: AvailableSeekersService,
    private invitationsService: InvitationsService // used for invite accept decline etc
  ) {
    this.available_seekers_invs$ = this.availableSeekersService.response_invs;
    this.resolved = 0;
    this.passed = [0];
  }

  ngOnInit() {
    // find the number of invites for this user and substract the number resolved
    // TODO check resolved not held in a closure!!
    // ie when resolved changes and observable changes we keep up
    this.available_seekers_invs$.subscribe(res => {
      this.available_seekers_invs = res.filter(
        inv =>
          inv.created_by.id != this.seeker.user.id &&
          (inv.mentor.id == this.seeker.user.id ||
            inv.mentee.id == this.seeker.user.id)
      );
      this.emitRemainder();
    });
  }

  emitRemainder() {
    // actions an emit of the remainder
    this.left_to_resolve.emit(
      this.available_seekers_invs.length - this.resolved
    );
  }

  passInvite(inv) {
    // We don't wish to accept or decline this invite at the moment
    // remove from our list to action
    this.resolved++;
    console.log("skip this invite: " + inv.id);
    this.passed.push(inv.id);
    this.emitRemainder();
  }
  actionInvite(inv) {
    // action the invite refresh the seekers once complete
    this.invitationsService.acceptInvitation(inv).subscribe(inv => {
      // TODO require better method to handle this! - (updating the db changes)
      this.availableSeekersService.fetchAvailableSeekers();
    });
  }
  declineInvite(inv) {
    // decline th einvite refresh the seekers once complete
    this.invitationsService.declineInvitation(inv).subscribe(inv => {
      // TODO require better method to handle this! - (updating the db changes)
      this.availableSeekersService.fetchAvailableSeekers();
    });
  }
}
