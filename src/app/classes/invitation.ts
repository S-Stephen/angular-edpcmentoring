export { Member, Invitation } from "./member";

// Invitation used to be defined in this file - but it caused a circular dependancy
// we therefore moved it into the member file where it will be hoisted
// and we export immediately from here

//export class Invitation;
/*
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
} */
