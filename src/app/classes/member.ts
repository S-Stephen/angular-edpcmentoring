import { Cuedmember } from "./cuedmember";
import { MenteePreferencesComponent } from "../home/mentee-preferences/mentee-preferences.component";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
//import { Invitation } from "./invitation";

export class Member {
  url: string;
  first_name: string;
  id: number;
  is_superuser: boolean;
  last_name: string;
  email: string;
  username: string;
  cued_member: Cuedmember;
  /* This caused a circular dependency - we need a different model
   mentee_invitations: Invitation[];
   mentor_invitations: Invitation[]; */

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.cued_member) this.cued_member = new Cuedmember(obj.cued_member);
    /*
    // generally returned by mm/seek
    if (obj.mentee_invitations) {
      for (let i of obj.mentee_invitations) {
        // TODO  are these if's required would it loop if null?
        if (i) this.mentee_invitations.push(new Invitation(i));
      }
    }
    if (obj.mentor_invitations) {
      for (let i of obj.mentor_invitations) {
        // TODO  are these if's required would it loop if null?
        if (i) this.mentor_invitations.push(new Invitation(i));
      }
    } */
  }

  name(): string {
    return this.last_name + ", " + this.first_name;
  }

  divLetter(): string {
    return this.cued_member.research_group.division.letter;
  }

  group(): string {
    // returns the research group (div)
    return this.cued_member.research_group.name;
  }

  group_div(): string {
    // returns the research group (div)
    return this.cued_member.research_group.name + " (" + this.divLetter() + ")";
  }
}

export class Invitation {
  created_by: Member;
  created_on: Date;
  created_relationship: string;
  deactivated_on: Date;
  id: number;
  mentee: Member;
  mentee_response: string;
  mentor: Member;
  mentor_response: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.created_by) this.created_by = new Member(obj.created_by);
    if (obj.mentee) this.mentee = new Member(obj.mentee);
    if (obj.mentor) this.mentor = new Member(obj.mentor);
  }

  short(): string {
    // short description of the invitation
    return (
      this.mentor.name() +
      " mentor " +
      this.mentee.name() +
      " invited by " +
      this.created_by.name()
    );
  }

  description(): string {
    return this.created_by.id === this.mentee.id
      ? this.created_by.name() +
          " requested " +
          this.mentor.name() +
          " to be their Mentor"
      : this.created_by.name() +
          " invited " +
          this.mentee.name() +
          " to be their Mentee";
  }
}
