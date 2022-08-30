const Employee = require("./employee");
console.log(Employee);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // all of Employee's properties and methods
    Employee.getName(name);
    Employee.getId(id);
    Employee.getEmail(email);
    // add GitHub: GitHub username
    this.github = github;
  }
  // getRole() must be overridden to return 'Engineer'
  getRole() {
    return Engineer;
  }
}
