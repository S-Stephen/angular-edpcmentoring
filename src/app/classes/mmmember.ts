import { Member } from "./member";
import { Invitation } from "./invitation";

// matchmaker member / seeker

export class Mmmember extends Member {
  mentee_invitations: Invitation[];
  mentor_invitations: Invitation[];

  constructor(obj?: any) {
    super(obj);
    Object.assign(this, obj);
    //if (obj.cued_member) this.cued_member = new Cuedmember(obj.cued_member); // could call as super
    for (let i of obj.mentee_invitations) {
      // TODO  are these if's required would it loop if null?
      if (i) this.mentee_invitations.push(new Invitation(i));
    }
    for (let i of obj.mentor_invitations) {
      // TODO  are these if's required would it loop if null?
      if (i) this.mentor_invitations.push(new Invitation(i));
    }
  }
}
