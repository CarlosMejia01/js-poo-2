// const company = {
//   name: "tech",
//   employees: [],
//   sortEmployees: function () {},
// };

function Company(name) {
  let employees = [];
  this.name = name;

  this.getEmployees = function () {
    return employees;
  };

  this.addEmployees = function (employee) {
    employees.push(employee);
  };
}

const company = new Company("coca cola");
const company2 = new Company("pepsi");

console.log(company);
console.log(company2);

company.addEmployees({ name: "ryan" });
company2.addEmployees({ name: "joe" });

console.log(company.getEmployees());
console.log(company2.getEmployees());
