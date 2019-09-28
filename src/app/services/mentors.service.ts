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
export class MentorsService {
  mentorListUrl: string = "/api/mentors/";
  /*
  getMentorRelationships(): Observable<Relationship[]> {
    return this.http
      .get<Relationship[]>(this.mentorListUrl)
      .pipe(map(rels => rels.map(rel => new Relationship(rel))));
  } */

  endMentorRelationship(rel: Relationship): Observable<Relationship> {
    //TODO: after ending a relationship (receiving the response)
    //we should also request the fresh list
    return this.http.patch<Relationship>("/api/basicrel/" + rel.id + "/", {
      is_active: false
    });
    //.pipe(this.handleError(this.handleError));
  }

  private responseSource = new BehaviorSubject<Relationship[]>([]);
  public response = this.responseSource.asObservable();

  fetchMentorRelationships() {
    this.http
      .get<Relationship[]>(this.mentorListUrl)
      .pipe(map(rels => rels.map(rel => new Relationship(rel))))
      .subscribe(resp => {
        this.responseSource.next(resp);
      });
  }

  constructor(private http: HttpClient) {}
  /*
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  } */
}

/*
@Injectable({
  providedIn: "root"
})
export class MentorsService {
  getMentors(): Observable<Member[]> {
    return of(MEMBERS);
  }

  constructor() {}
} */
