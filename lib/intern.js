const Employee = require("./employee");
console.log(Employee);

class Intern {
  constructor(name, id, email, school) {
    // all of Employee's properties and methods
    Employee.getName(name);
    Employee.getId(id);
    Employee.getEmail(email);
    // add school
    this.school = school;
  }
  getSchool() {}
  // getRole() must be overridden to return 'Intern'
  getRole() {
    return Intern;
  }
}
