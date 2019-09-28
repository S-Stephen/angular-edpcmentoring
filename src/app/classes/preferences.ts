export class Preferences {
  is_seeking_mentee: boolean;
  is_seeking_mentor: boolean;
  mentee_requirements: string;
  mentor_requirements: string;
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
