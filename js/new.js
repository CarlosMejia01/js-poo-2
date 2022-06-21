function Person() {
    this.name = "",
    this.lastname = ""
}

// function PersonTwo() {
//     'use strict';
//     this.name = "",
//     this.lastname = ""
// }

//create person without new
// const person = PersonTwo(); //Call error

const person = new Person();

console.log(person);