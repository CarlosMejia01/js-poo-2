// const person = new Object();
// console.log(person);

// const person2 = {};
// console.log(person2.constructor == Object);

// const string = new Object("hello world");
// string.name = "Special String";
// string.text = function() {
//     return this + "test";
// }

// console.log(string.name);

const user = {
  name: "ryan",
  lastname: "ray",
  age: 40,
  showName() {
    return this.name;
  },
};

console.log(Object.values(user));