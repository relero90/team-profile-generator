const Employee = require("./employee");
console.log(Employee);

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // all of Employee's methods
    super(name, id, email);
    // add officeNumber
    this.officeNumber = officeNumber;
  }
  // getRole() must be overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
