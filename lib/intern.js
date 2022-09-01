const Employee = require("./employee");
console.log(Employee);

class Intern extends Employee {
  constructor(name, id, email, school) {
    // all of Employee's properties and methods
    super(name, id, email);
    // add school
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
