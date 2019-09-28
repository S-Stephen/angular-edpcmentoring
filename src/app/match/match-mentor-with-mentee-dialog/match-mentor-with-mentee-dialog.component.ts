import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Observable } from "rxjs";
import { combineLatest, map } from "rxjs/operators";

import { Seeker } from "app/classes/seeker";
import { Invitation } from "app/classes/invitation";
import { Relationship } from "app/classes/relationship";

import { AvailableSeekersService } from "../../services/available-seekers.service";
import { AvailableMenteesService } from "../../services/available-mentees.service";
import { InvitationsService } from "../../services/invitations.service";

@Component({
  selector: "men-match-mentor-with-mentee-dialog",
  templateUrl: "./match-mentor-with-mentee-dialog.component.html",
  styleUrls: ["./match-mentor-with-mentee-dialog.component.css"]
})
export class MatchMentorWithMenteeDialogComponent implements OnInit {
  to_resolve: number;
  available_mentees$: Observable<Seeker[]>;

  available_seekers$: Observable<Seeker[]>;
  available_seekers_invs$: Observable<Invitation[]>;
  available_seekers_rels$: Observable<Relationship[]>;

  selectedMentee: Seeker;
  constructor(
    private availableSeekersService: AvailableSeekersService, // monitored by the parent we could trigger by an event?
    private availableMenteesService: AvailableMenteesService,
    private invitationsService: InvitationsService,
    public dialogRef: MatDialogRef<MatchMentorWithMenteeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.available_mentees$ = this.availableMenteesService.response;
    this.available_seekers$ = this.availableSeekersService.response;
    this.available_seekers_invs$ = this.availableSeekersService.response_invs;
    this.available_seekers_rels$ = this.availableSeekersService.response_rels;
  }

  ngOnInit() {
    // TODO we need to filter those already in a relationship
    // and the mentee themselves!
    // should be able to use the same filter as be the user
    // when they search for a mentor InviteMentorDialogComponent
    // create a shared component?
    // would this create the correct list?

    this.available_mentees$ = this.available_seekers$.pipe(
      combineLatest(
        this.available_seekers_invs$, // this would return the current users mentor
        this.available_seekers_rels$ // this would return the current users invites
      ),
      map(([avail, invs, rels]) =>
        avail.filter(
          avail =>
            // remove the user passed to the component
            avail.user.id != this.data.seeker.user.id &&
            // remove invites involving our user
            !invs
              .filter(inv => {
                return (
                  inv.mentee.id == this.data.seeker.user.id ||
                  inv.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentor.id)
              .includes(avail.user.id) &&
            !invs
              .filter(inv => {
                return (
                  inv.mentee.id == this.data.seeker.user.id ||
                  inv.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentor.id)
              .includes(avail.user.id) &&
            // remove relationships involving our user
            !rels
              .filter(rel => {
                return (
                  rel.mentee.id == this.data.seeker.user.id ||
                  rel.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentor.id)
              .includes(avail.user.id) &&
            !rels
              .filter(rel => {
                return (
                  rel.mentee.id == this.data.seeker.user.id ||
                  rel.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentor.id)
              .includes(avail.user.id)
        )
      )
    );
  }

  onResolve(num: number) {
    this.to_resolve = num;
  }
  selectMentee(mentor: Seeker) {
    // precursor to add Mentor - offer 'backout'
    this.selectedMentee = mentor;
  }
  cancelSelection() {
    // backout of selection
    this.selectedMentee = undefined;
  }
  addMentee(mentee: Seeker) {
    // add seeker as the current user's (data.seeker) Mentor
    // TODO fix with the currently logged in user!
    this.invitationsService
      .addInvitation({
        created_by: mentee.user,
        mentor: this.data.seeker.user,
        mentee: mentee.user,
        mentee_response: "A",
        mentor_response: "A"
      })
      .subscribe(res => {
        this.availableMenteesService.fetchAvailableMentees();
        this.availableSeekersService.fetchAvailableSeekers();
        this.dialogRef.close();
      });
  }
}
