export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.inventory = new Map();
  }

  addItem(item, quantity = 1) {
    if (typeof quantity !== "number" || quantity <= 0) {
      return this;
    }

    const current = this.inventory.get(item) ?? 0;
    this.inventory.set(item, current + quantity);
    return this;
  }

  removeItem(item, quantity = 1) {
    if (typeof quantity !== "number" || quantity <= 0) {
      return this;
    }

    if (!this.inventory.has(item)) {
      return this;
    }

    const remaining = this.inventory.get(item) - quantity;
    if (remaining <= 0) {
      this.inventory.delete(item);
    } else {
      this.inventory.set(item, remaining);
    }

    return this;
  }

  getItemCount(item) {
    return this.inventory.get(item) ?? 0;
  }
}