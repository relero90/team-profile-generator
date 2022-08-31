class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
    // ??? - this one is just a string
    // populate into card header
  }

  getId() {
    return this.id;
    // ??? - this one is just a number... not sure what to do with it
    // populate into card list
  }

  getEmail() {
    return this.email;
    // email should become a link to open default email application
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
