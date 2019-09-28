import { Component, OnInit } from "@angular/core";
import { UserService } from "app/services/user.service";
import { Observable } from "rxjs";
import { Currentuser } from "app/classes/currentuser";
import { InvitationsService } from "app/services/invitations.service";
import { Invitation } from "app/classes/invitation";
import { filter, map, combineLatest } from "rxjs/operators";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currentUser$: Observable<Currentuser>;
  currentUser: Currentuser;
  //invitations$: Observable<Invitation[]>; // these are all the invitations involving this user

  invitationsFrom: Invitation[]; // invitations from me
  invitationsTo$: Observable<Invitation[]>; //invitations to user
  invitationsToMentor$: Observable<Invitation[]>; //invitations to user to be mentor
  invitationsToMentee$: Observable<Invitation[]>; //invitations to user to be mentor
  invitationsFrom$: Observable<Invitation[]>; //invitations from user

  constructor(
    private userService: UserService,
    private invitationsService: InvitationsService
  ) {
    this.currentUser$ = this.userService.response$;
    this.userService.response$.subscribe(user => (this.currentUser = user));
    //  map(invs => invs.filter(inv => inv.created_by.id == this.currentUser.id))
    //);
    //this.userService.response$
    //combineLatest(this.currentUser$,this.invitationsService.response$).pipe(
    //this.invitationsService.response$.pipe(
    //  combineLatest(this.userService.response$)
    //)

    //)
  }

  ngOnInit() {
    //this.invitations$ = this.invitationsService.response$;
    this.invitationsTo$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id != user.id))
    );
    this.invitationsFrom$ = this.invitationsService.response$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.created_by.id == user.id))
    );
    this.invitationsToMentor$ = this.invitationsTo$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentor.id == user.id))
    );
    this.invitationsToMentee$ = this.invitationsTo$.pipe(
      combineLatest(this.userService.response$),
      map(([invs, user]) => invs.filter(inv => inv.mentee.id == user.id))
    );
    this.userService.fetchCurrent();
    this.invitationsService.fetchMyInvitations();
  }
}
