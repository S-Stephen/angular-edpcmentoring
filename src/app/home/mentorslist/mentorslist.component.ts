import { Component, OnInit, Input } from "@angular/core";

import { Member } from "../../classes/member";
import { Relationship } from "../../classes/relationship";

import { MentorsService } from "../../services/mentors.service";

import { MatDialog } from "@angular/material/dialog";
import { DelMentorDialogComponent } from "../del-mentor-dialog/del-mentor-dialog.component";
import { Observable } from "rxjs";
import { Currentuser } from "app/classes/currentuser";
import { UserService } from "app/services/user.service";
import { InviteMentorDialogComponent } from "../invite-mentor-dialog/invite-mentor-dialog.component";
import { InvitationsService } from "app/services/invitations.service";
import { combineLatest, map } from "rxjs/operators";
import { ActionMenteeInviteDialogComponent } from "../action-mentee-invite-dialog/action-mentee-invite-dialog.component";
import { Invitation } from "app/classes/invitation";

@Component({
  selector: "men-mentorslist",
  templateUrl: "./mentorslist.component.html",
  styleUrls: ["./mentorslist.component.css"]
})
export class MentorslistComponent implements OnInit {
  currentUser$: Observable<Currentuser>;
  currentUser: Currentuser;
  relationships: Observable<any[]>;

  invitationsTo$: Observable<Invitation[]>; //invitations to user
  invitationsFrom$: Observable<Invitation[]>; //invitations from user

  invitationsToMentor$: Observable<Invitation[]>; //invitations to user to be mentor
  invitationsFromMentor$: Observable<Invitation[]>; //invitations from user to be Mentor

  invitationsToMentee$: Observable<Invitation[]>; //invitations to user to be mentee
  invitationsFromMentee$: Observable<Invitation[]>; //invitations from user to be Mentee

  constructor(
    private mentorsService: MentorsService,
    public dialog: MatDialog,
    private userService: UserService,
    private invitationsService: InvitationsService
  ) {
    this.relationships = this.mentorsService.response;
    this.currentUser$ = this.userService.response$;
    // subscribe so when fetch returns we set the value TODO change to observable

    this.invitationsFrom$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id == user.id))
    );
    this.invitationsFromMentee$ = this.invitationsFrom$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentee.id == user.id))
    );
    this.invitationsTo$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id != user.id))
    );
    this.invitationsToMentee$ = this.invitationsTo$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentee.id == user.id))
    );
  }

  ngOnInit() {
    //this.getMentorRelationships();
    this.userService.response$.subscribe(user => (this.currentUser = user));
    this.mentorsService.fetchMentorRelationships();
    this.userService.fetchCurrent();
  }

  toggleAvailableStatus() {
    //we wish to invert the status of is_seeking_mentor
    // $http.put("api/users/"+newme.id+"/",newme).success(function(resp){
    // call the Currentuser service and put the new details
    this.userService.toggleSearchingMentor(this.currentUser);
  }

  openEndDialog(event, rel) {
    this.dialog.open(DelMentorDialogComponent, {
      width: "500px",
      data: { relationship: rel },
      autoFocus: true,
      hasBackdrop: true
    });
  }
  openInviteDialog(event) {
    this.dialog.open(InviteMentorDialogComponent, {
      width: "500px",
      data: { relationships: this.relationships },
      autoFocus: true,
      hasBackdrop: true
    });
  }
  openActionMenteeInviteDialog(event) {
    this.dialog.open(ActionMenteeInviteDialogComponent, {
      width: "500px",
      data: { invites$: this.invitationsToMentee$ },
      autoFocus: true,
      hasBackdrop: true
    });
  }
}
