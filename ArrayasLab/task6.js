export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.party = [];
  }

  addToParty(party) {
    if (!Array.isArray(party)) {
      throw new TypeError("Party must be an array.");
    }

    if (!party.includes(this)) {
      party.push(this);
    }

    this.party = party;
    return this;
  }

  removeFromParty(party) {
    if (!Array.isArray(party)) {
      throw new TypeError("Party must be an array.");
    }

    this.party = party.filter((member) => member !== this);
    return this;
  }
}