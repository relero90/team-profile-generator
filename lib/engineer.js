const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // all of Employee's properties and methods
    super(name, id, email);
    // add github username
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub() {
    const gitHubLink = `<a href="https://github.com/${this.github}" target="_blank">${this.github}<a>`;
    return gitHubLink;
  }
}

module.exports = Engineer;
