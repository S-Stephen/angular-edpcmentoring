import { Component, OnInit } from "@angular/core";
import { MentorPreferencesComponent } from "app/home/mentor-preferences/mentor-preferences.component";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { filter } from "minimatch";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { AvailableMentorsService } from "../services/available-mentors.service";
import { AvailableMenteesService } from "../services/available-mentees.service";
import { AvailableSeekersService } from "../services/available-seekers.service";
import { Seeker } from "app/classes/seeker";
import { Invitation } from "app/classes/invitation";
import { Relationship } from "app/classes/Relationship";

import { MatchMentorWithMenteeDialogComponent } from "./match-mentor-with-mentee-dialog/match-mentor-with-mentee-dialog.component";
import { MatchMenteeWithMentorDialogComponent } from "./match-mentee-with-mentor-dialog/match-mentee-with-mentor-dialog.component";

@Component({
  selector: "match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.css"]
})
export class MatchComponent implements OnInit {
  available_mentees$: Observable<Seeker[]>;
  available_mentors$: Observable<Seeker[]>;
  available_seekers$: Observable<Seeker[]>;
  available_seekers_invs$: Observable<Invitation[]>;
  available_seekers_invs: Invitation[];
  available_seekers_rels$: Observable<Relationship[]>;
  available_seekers_rels: Relationship[];

  constructor(
    public dialog: MatDialog,
    private availableMentorsService: AvailableMentorsService,
    private availableMenteesService: AvailableMenteesService,
    private availableSeekersService: AvailableSeekersService
  ) {
    this.available_mentees$ = this.availableMenteesService.response;
    this.available_mentors$ = this.availableMentorsService.response;
    this.available_seekers$ = this.availableSeekersService.response;
    this.available_seekers_invs$ = this.availableSeekersService.response_invs;
    //tod these next two arrays should be equivalent!! only pop one!
    this.available_seekers_rels$ = this.availableSeekersService.response_rels;
  }

  ngOnInit() {
    this.availableSeekersService.response_rels.subscribe(rels => {
      this.available_seekers_rels = rels;
    });
    this.availableSeekersService.response_invs.subscribe(invs => {
      this.available_seekers_invs = invs;
    });
    this.availableMentorsService.fetchAvailableMentors();
    this.availableMenteesService.fetchAvailableMentees();
    this.availableSeekersService.fetchAvailableSeekers();
  }

  numMentees(mentor: Seeker) {
    //return the number of mentors listed in our this.available_seekers_rels$ list
    // filter the this.available_seekers_rels$ array by seeker
    // return size
    return this.available_seekers_rels.filter(
      rel => rel.mentor.id == mentor.user.id
    ).length;
  }
  numMentors(mentee: Seeker) {
    //return the number of mentors listed in our this.available_seekers_rels$ list
    // filter the this.available_seekers_rels$ array by seeker
    // return size
    return this.available_seekers_rels.filter(
      rel => rel.mentee.id == mentee.user.id
    ).length;
  }
  invitesReceivedMentor(recip: Seeker) {
    // return the number of invites that this 'seeker' has sent
    return this.available_seekers_invs.filter(
      inv =>
        inv.created_by.id != recip.user.id && inv.mentor.id == recip.user.id
    ).length;
  }
  invitesReceivedMentee(recip: Seeker) {
    // return the number of invites that this 'seeker' has sent
    return this.available_seekers_invs.filter(
      inv =>
        inv.created_by.id != recip.user.id && inv.mentee.id == recip.user.id
    ).length;
  }

  matchMentorWithMentee(seeker: Seeker) {
    console.log("TODO - match with Mentor Mentee");
    this.dialog.open(MatchMentorWithMenteeDialogComponent, {
      width: "500px",
      data: { seeker: seeker },
      autoFocus: true,
      hasBackdrop: true
    });
  }
  matchMenteeWithMentor(seeker: Seeker) {
    console.log("TODO - match Mentee with Mentor");
    this.dialog.open(MatchMenteeWithMentorDialogComponent, {
      width: "500px",
      data: { seeker: seeker },
      autoFocus: true,
      hasBackdrop: true
    });
  }
}
