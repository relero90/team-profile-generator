const Employee = require("./employee");
console.log(Employee);

class Intern extends Employee {
  constructor(name, id, email, school) {
    // all of Employee's properties and methods
    super(name, id, email);
    // add school
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  // getRole() must be overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
