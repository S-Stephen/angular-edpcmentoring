import { Researchgroup } from "./researchgroup";

export class Cuedmember {
  first_names: string;
  is_active: boolean;
  research_group: Researchgroup;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.research_group)
      this.research_group = new Researchgroup(obj.research_group);
  }

  get divLetter() {
    return this.research_group.division.letter;
  }
}
