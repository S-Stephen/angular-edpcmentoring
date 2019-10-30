import { Preferences } from "./preferences";
import { Cuedmember } from "./cuedmember";
import { Relationship } from "./relationship";
import { Invitation } from "./invitation";

export class Currentuser {
  url: string;
  first_name: string;
  id: number;
  is_superuser: boolean;
  last_name: string;
  email: string;
  username: string;
  cued_member: Cuedmember;
  groups: string[];
  mentee_invitations: Invitation[];
  mentor_invitations: Invitation[];
  mentee_relationships: Relationship[];
  mentor_relationships: Relationship[];
  mentorship_preferences: Preferences;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.cued_member) this.cued_member = new Cuedmember(obj.cued_member);
    this.mentee_invitations = [];
    for (let i of obj.mentee_invitations) {
      // TODO  are these if's required would it loop if null?
      if (i) this.mentee_invitations.push(new Invitation(i));
    }
    this.mentor_invitations = [];
    for (let i of obj.mentor_invitations) {
      if (i) this.mentor_invitations.push(new Invitation(i));
    }
    this.mentee_relationships = [];
    for (let i of obj.mentee_relationships) {
      if (i) this.mentee_relationships.push(new Relationship(i));
    }
    this.mentor_relationships = [];
    for (let i of obj.mentor_relationships) {
      if (i) this.mentor_relationships.push(new Relationship(i));
    }

    if (obj.mentorship_preferences)
      this.mentorship_preferences = new Preferences(obj.mentorship_preferences);
  }

  name(): string {
    return this.last_name + ", " + this.first_name;
  }

  divLetter(): string {
    return this.cued_member.research_group.division.letter;
  }
}
