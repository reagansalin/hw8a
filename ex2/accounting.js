class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
  }

  describe() {
    return `${this.name} has a balance of ${this.balance}`;
  }
}

module.exports = Account;
