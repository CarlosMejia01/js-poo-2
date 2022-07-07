class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.age = null;
    }
}

class Programmer extends Person {
    constructor(language) {
        super();
        this.language = language;
    }
}

const person = new Person();
console.log(person);
const programmer = new Programmer();
console.log(programmer);