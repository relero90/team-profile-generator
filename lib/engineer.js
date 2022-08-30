const Employee = require("./employee");
console.log(Employee);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // all of Employee's properties and methods
    super(name, id, email); // super calls the constructor function of the parent class (Employee)
    // add GitHub: GitHub username
    this.github = github;
  }
  // getRole() must be overridden to return 'Engineer'
  getRole() {
    return Engineer;
  }
}
