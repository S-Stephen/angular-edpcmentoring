import { Member } from "./member";

// returned from relseek
export class Seeker {
  is_seeking_mentee: boolean;
  is_seeking_mentor: boolean;
  mentee_requirements: string;
  mentor_requirements: string;
  user: Member;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.user) this.user = new Member(obj.user);
  }
  is_active(): string {
    return this.user.cued_member.is_active ? "YESY" : "NO";
  }
}
