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
import { AvailableMentorsService } from "../../services/available-mentors.service";
import { InvitationsService } from "../../services/invitations.service";

@Component({
  selector: "men-match-mentee-with-mentor-dialog",
  templateUrl: "./match-mentee-with-mentor-dialog.component.html",
  styleUrls: ["./match-mentee-with-mentor-dialog.component.css"]
})
export class MatchMenteeWithMentorDialogComponent implements OnInit {
  to_resolve: number;
  available_mentors$: Observable<Seeker[]>;

  available_seekers$: Observable<Seeker[]>;
  available_seekers_invs$: Observable<Invitation[]>;
  available_seekers_rels$: Observable<Relationship[]>;

  selectedMentor: Seeker;
  constructor(
    private availableSeekersService: AvailableSeekersService, // monitored by the parent we could trigger by an event?
    private availableMentorsService: AvailableMentorsService,
    private invitationsService: InvitationsService,
    public dialogRef: MatDialogRef<MatchMenteeWithMentorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.available_mentors$ = this.availableMentorsService.response;
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

    this.available_mentors$; // -> we want a list of mentor seekers(mentors) who
    // -> do not have an invitaton associated to this user
    // -> do not have a current relationship with this user

    this.available_mentors$ = this.available_seekers$.pipe(
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
              .map(o => o.mentee.id)
              .includes(avail.user.id) &&
            !invs
              .filter(inv => {
                return (
                  inv.mentee.id == this.data.seeker.user.id ||
                  inv.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentee.id)
              .includes(avail.user.id) &&
            // remove relationships involving our user
            !rels
              .filter(rel => {
                return (
                  rel.mentee.id == this.data.seeker.user.id ||
                  rel.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentee.id)
              .includes(avail.user.id) &&
            !rels
              .filter(rel => {
                return (
                  rel.mentee.id == this.data.seeker.user.id ||
                  rel.mentor.id == this.data.seeker.user.id
                );
              })
              .map(o => o.mentee.id)
              .includes(avail.user.id)
        )
      )
    );
  }

  onResolve(num: number) {
    this.to_resolve = num;
  }
  selectMentor(mentor: Seeker) {
    // precursor to add Mentor - offer 'backout'
    this.selectedMentor = mentor;
  }
  cancelSelection() {
    // backout of selection
    this.selectedMentor = undefined;
  }
  addMentor(mentor: Seeker) {
    // add seeker as the current user's (data.seeker) Mentor
    // TODO fix with the currently logged in user!
    this.invitationsService
      .addInvitation({
        created_by: mentor.user,
        mentor: mentor.user,
        mentee: this.data.seeker.user,
        mentee_response: "A",
        mentor_response: "A"
      })
      .subscribe(res => {
        this.availableMentorsService.fetchAvailableMentors();
        this.availableSeekersService.fetchAvailableSeekers();
        this.dialogRef.close();
      });
  }
}
