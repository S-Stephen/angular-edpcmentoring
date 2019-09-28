import { Component, OnInit, Input } from "@angular/core";

import { Member } from "../../classes/member";
import { Relationship } from "../../classes/relationship";

import { MenteesService } from "../../services/mentees.service";

import { MatDialog } from "@angular/material/dialog";
import { DelMenteeDialogComponent } from "../del-mentee-dialog/del-mentee-dialog.component";
import { Observable } from "rxjs";
import { Currentuser } from "../../classes/currentuser";
import { UserService } from "../../services/user.service";
import { InviteMenteeDialogComponent } from "../invite-mentee-dialog/invite-mentee-dialog.component";
import { InvitationsService } from "../../services/invitations.service";
import { combineLatest, map } from "rxjs/operators";
import { ActionMentorInviteDialogComponent } from "../action-mentor-invite-dialog/action-mentor-invite-dialog.component";
import { Invitation } from "../../classes/invitation";

@Component({
  selector: "men-menteeslist",
  templateUrl: "./menteeslist.component.html",
  styleUrls: ["./menteeslist.component.css"]
})
export class MenteeslistComponent implements OnInit {
  currentUser$: Observable<Currentuser>;
  currentUser: Currentuser;
  relationships$: Observable<any[]>;

  invitationsTo$: Observable<Invitation[]>; //invitations to user
  invitationsFrom$: Observable<Invitation[]>; //invitations from user

  invitationsToMentee$: Observable<Invitation[]>; //invitations to user to be mentee
  invitationsFromMentee$: Observable<Invitation[]>; //invitations from user to be Mentee

  invitationsToMentor$: Observable<Invitation[]>; //invitations to user to be mentee
  invitationsFromMentor$: Observable<Invitation[]>; //invitations from user to be Mentee

  constructor(
    private menteesService: MenteesService,
    public dialog: MatDialog,
    private userService: UserService,
    private invitationsService: InvitationsService
  ) {
    this.relationships$ = this.menteesService.response$;
    this.currentUser$ = this.userService.response$;

    this.invitationsFrom$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id == user.id))
    );
    // invitations from user to be mentor for another user
    this.invitationsFromMentor$ = this.invitationsFrom$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentor.id == user.id))
    );
    this.invitationsTo$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id != user.id))
    );
    this.invitationsToMentor$ = this.invitationsTo$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentor.id == user.id))
    );
  }

  ngOnInit() {
    //this.getMenteeRelationships();
    // subscribe so when fetch returns we set the value TODO change to observable
    this.userService.response$.subscribe(user => (this.currentUser = user));
    this.menteesService.fetchMenteeRelationships();
    this.userService.fetchCurrent();
    this.invitationsService.fetchMyInvitations();
  }

  toggleAvailableStatus() {
    //we wish to invert the status of is_seeking_mentee
    // $http.put("api/users/"+newme.id+"/",newme).success(function(resp){
    // call the Currentuser service and put the new details
    this.userService.toggleSearchingMentee(this.currentUser);
  }

  openEndDialog(event, rel) {
    this.dialog.open(DelMenteeDialogComponent, {
      width: "500px",
      data: { relationship: rel },
      autoFocus: true,
      hasBackdrop: true
    });
  }
  openInviteDialog(event) {
    this.dialog.open(InviteMenteeDialogComponent, {
      width: "500px",
      data: { relationships: this.relationships$ },
      autoFocus: true,
      hasBackdrop: true
    });
  }
  openActionMentorInviteDialog(event) {
    this.dialog.open(ActionMentorInviteDialogComponent, {
      width: "500px",
      data: { invites$: this.invitationsToMentor$ },
      autoFocus: true,
      hasBackdrop: true
    });
  }
}
