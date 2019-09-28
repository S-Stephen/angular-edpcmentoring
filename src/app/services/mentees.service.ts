import { Injectable } from "@angular/core";

import { Observable, throwError, BehaviorSubject } from "rxjs";

//import { Member } from "../classes/member";
//import { MEMBERS } from "../mock-members";
import { Relationship } from "../classes/relationship";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenteesService {
  menteeListUrl = "/api/mentees/";
  /*
  getMenteeRelationships(): Observable<Relationship[]> {
    return this.http
      .get<Relationship[]>(this.menteeListUrl)
      .pipe(map(rels => rels.map(rel => new Relationship(rel))));
  }
 */
  endMenteeRelationship(rel: Relationship): Observable<Relationship> {
    //TODO: after ending a relationship (receiving the response)
    //we should also request the fresh list
    return this.http.patch<Relationship>("/api/basicrel/" + rel.id + "/", {
      is_active: false
    });
    //.pipe(this.handleError(this.handleError));
  }

  private responseSource = new BehaviorSubject<Relationship[]>([]);
  public response$ = this.responseSource.asObservable();

  fetchMenteeRelationships() {
    this.http
      .get<Relationship[]>(this.menteeListUrl)
      .pipe(map(rels => rels.map(rel => new Relationship(rel))))
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  constructor(private http: HttpClient) {}
}
