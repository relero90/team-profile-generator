const Employee = require("./employee");
console.log(Employee);

class Intern extends Employee {
  constructor(name, id, email, school) {
    // all of Employee's properties and methods
    super(name, id, email); // super calls the constructor function of the parent class (Employee)
    // add school
    this.school = school;
  }
  getSchool() {}
  // getRole() must be overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

const intern1 = new Intern(
  "Bowie",
  "00789",
  "bowie@mail.com",
  "University of Denver"
);
console.log(intern1);
