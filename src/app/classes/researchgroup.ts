import { Division } from "./division";

export class Researchgroup {
  name: string;
  division: Division;

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (obj.division) this.division = new Division(obj.division);
  }
}
