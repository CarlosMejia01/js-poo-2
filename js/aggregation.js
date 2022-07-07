const company = {
  name: "tech",
  employees: [],
};

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const john = new Person("john", "ray");
const maria = new Person("maria", "perez");

company.employees.push(john);
company.employees.push(maria);

console.log(john);
console.log(maria);
console.log(company);
