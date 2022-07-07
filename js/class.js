class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  greet() {
    return `Hello I am ${this.name} ${this.lastname}`;
  }
}

const user = new Person("joe", "ray");
const user2 = new Person("ryan", "ray");

console.log(user.greet());
console.log(user2.greet());
