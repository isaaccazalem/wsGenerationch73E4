export class Player {
  constructor(name, level = 1, experience = 0, xpToNextLevel = 100) {
    this.name = name;
    this.level = level;
    this.experience = experience;
    this.xpToNextLevel = xpToNextLevel;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  gainExperience(amount) {
    if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
      return this;
    }

    this.experience += amount;

    while (this.experience >= this.xpToNextLevel) {
      this.experience -= this.xpToNextLevel;
      this.level += 1;
    }

    return this;
  }

  levelUp() {
    this.level += 1;
    return this;
  }
}