const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // all of Employee's properties and methods
    super(name, id, email);
    // add github username
    this.github = github;
  }
  // getRole() must be overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
