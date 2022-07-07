function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.displayName = function() {
        return `${this.name} ${this.lastname}`;
    }
}

const john = new Person("Jhon", "McMillan");
john.name = "Joe";
const mario = new Person("Mario", "Rossi");
const maria = new Person("Maria", "Perez");
const jose = new Person("Jose", "Perez");


Person.prototype.greet = function() {
    return `Hello I'am ${this.name};`
}

console.log(john.greet());
console.log(mario.greet());
console.log(maria.greet());
console.log(jose.greet());