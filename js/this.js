const user = {
  name: "Joe", //properties
  lastname: "Perez",
  age: 30,
  showFullName() {
    return this.name + " " + this.lastname;
  },
};

console.log(user.showFullName());

const account = {
  number: "1234",
  amount: 100,
  deposit(quantity) {
    this.amount = this.amount + quantity;
  },
  withdraw(quantity) {
    this.amount = this.amount - quantity;
  }
};

account.deposit(100);
account.deposit(50);
account.deposit(10);
console.log(account);
account.withdraw(10);
account.withdraw(200);
console.log(account);
