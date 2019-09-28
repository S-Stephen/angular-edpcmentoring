export class Division {
  letter: string;
  name: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  divLetter() {
    return this.letter;
  }
}
