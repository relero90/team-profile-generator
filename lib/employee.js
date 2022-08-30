class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    // ??? - this one is just a string
    // populate into card header
  }
  getId() {
    // ??? - this one is just a number... not sure what to do with it
    // populate into card list
  }
  getEmail() {
    // email should become a link to open default email application
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
