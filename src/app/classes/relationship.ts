import { Member } from "./member";

export class Relationship {
  mentor: Member;
  mentee: Member;
  ended_by: Member;
  ended_on: Date;
  id: number;
  is_active: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.mentee) this.mentee = new Member(obj.mentee);
    if (obj.mentor) this.mentor = new Member(obj.mentor);
  }

  mentorName(): string {
    return this.mentor.name();
  }

  menteeName(): string {
    return this.mentee.name();
  }

  mentorDiv(): string {
    return this.mentor.divLetter();
  }

  menteeDiv(): string {
    return this.mentee.divLetter();
  }
  short(): string {
    return this.mentorName() + " mentoring " + this.menteeName();
  }
}
