function Person() {
    this.name = '';
    this.lastname = '';
}

function Programmer() {
    this.language = '';
}

Programmer.prototype = new Person();


console.log(Programmer);
console.log(Person);

const person = new Person();

person.name = 'maria';
person.lastname = 'perez';

console.log(person)

const programmer = new Programmer();

programmer.name = 'ryan';
programmer.lastname = 'ray';
programmer.language = 'js';

console.log(programmer);