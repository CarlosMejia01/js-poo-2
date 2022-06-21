const user1 = {
    name: "ryan", //properties
    lastname: "ray",
    age: 30,
    showFullName() {
        return "Ryan Ray"
    }
}

//constructor (object with properties and methods)
function Person() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.showFullName = function() {
        return `${this.name} ${this.lastname}`;
    }
};

const user2 = new Person();
user2.name = "Joe";
user2.lastname = "McMillan";
user2.age = 30;
console.log(user2.showFullName());

const user3 = new Person();
user3.name = "Cameron";
user3.lastname = "Howe";
const user4 = new Person();
const user5 = new Person();

console.log(user3, user4, user5);
