import { Injectable } from "@angular/core";

import { Observable, throwError, BehaviorSubject } from "rxjs";

import { Seeker } from "../classes/seeker";
import { Invitation } from "../classes/invitation";
import { Relationship } from "../classes/relationship";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, mapTo } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AvailableSeekersService {
  SeekerListUrl = "api/mm/seekrel/";
  //mentorInviteUrl = "api/invitations/";
  // during the retrieval of the seekers we can also populate a list of invitations
  // we are unable to reference these in the Member class at the moment because it
  // will create a circular dependency
  // during the retrieval also recover/populate a list of relationships cf invitations

  // TODO move invs and rels into separate services (chained from this one?)

  private responseSource = new BehaviorSubject<Seeker[]>([]);
  public response = this.responseSource.asObservable();
  private responseSourceInvs = new BehaviorSubject<Invitation[]>([]);
  public response_invs = this.responseSourceInvs.asObservable();
  private responseSourceRels = new BehaviorSubject<Relationship[]>([]);
  public response_rels = this.responseSourceRels.asObservable();

  fetchAvailableSeekers() {
    this.http
      .get<any[]>(this.SeekerListUrl)
      .pipe(
        // extracts the seekers and aggregates the invitations
        map(mens => {
          let arr1: Seeker[] = mens
            .map(men => new Seeker(men))
            .filter(mem => mem.user.cued_member.is_active);

          let invsarr: Invitation[] = [];
          let rels_arr: Relationship[] = [];
          for (let mem of mens) {
            if (mem.user && mem.user.mentee_invitations) {
              invsarr = [
                ...invsarr,
                ...mem.user.mentee_invitations.map(inv => new Invitation(inv))
              ];
            }
            if (mem.user && mem.user.mentor_invitations) {
              invsarr = [
                ...invsarr,
                ...mem.user.mentor_invitations.map(inv => new Invitation(inv))
              ];
            }
            if (mem.user && mem.user.mentor_relationships) {
              rels_arr = [
                ...rels_arr,
                ...mem.user.mentor_relationships.map(
                  rel => new Relationship(rel)
                )
              ];
            }
            if (mem.user && mem.user.mentee_relationships) {
              rels_arr = [
                ...rels_arr,
                ...mem.user.mentor_relationships.map(
                  rel => new Relationship(rel)
                )
              ];
            }
          }
          return {
            invs: invsarr,
            seekers: arr1,
            rels: rels_arr
          };
        })
      )
      .pipe(
        // deduplicate the invitations
        map(ret => {
          // tip https://dev.to/vuevixens/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
          let clean = Array.from(new Set(ret.invs.map(a => a.id))).map(id => {
            return ret.invs.find(a => a.id === id);
          });
          ret.invs = clean;
          return ret;
        })
      )
      .pipe(
        // deduplicate the mentor relationships
        map(ret => {
          // tip https://dev.to/vuevixens/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
          let clean = Array.from(new Set(ret.rels.map(a => a.id))).map(id => {
            return ret.rels.find(a => a.id === id);
          });
          ret.rels = clean;
          return ret;
        })
      )
      .subscribe(mens => {
        this.responseSource.next(mens.seekers);
        this.responseSourceInvs.next(mens.invs);
        this.responseSourceRels.next(mens.rels);
      });
  }

  matchMentorMentee(mentor: Seeker, mentee: Seeker) {
    //send an invitation to the mentor
    // on completion fetchAvailableMentors - update all observing
    console.log("TODO:  matchMentorMentee");
    //return this.http.post("api/invitations/", { mentor: mentor.user.url });
  }

  constructor(private http: HttpClient) {}
}
