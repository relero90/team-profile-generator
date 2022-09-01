const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // all of Employee's methods
    super(name, id, email);
    // add officeNumber
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
