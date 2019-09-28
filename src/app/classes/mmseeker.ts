import { Seeker } from "./seeker";
import { Mmmember } from "./mmmember";

// Match maker seeker object
// returned from a matchmakers request of seekers

export class Mmseeker extends Seeker {
  user: Mmmember;

  constructor(obj?: any) {
    super(obj);
    Object.assign(this, obj);
    if (obj.user) this.user = new Mmmember(obj.user);
  }
}
