class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    // email should become a link to open default email application
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
