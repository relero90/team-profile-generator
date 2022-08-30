const Employee = require("./employee");
console.log(Employee);

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // all of Employee's methods
    super(name, id, email); // super calls the constructor function of the parent class (Employee)
    // add officeNumber
    this.officeNumber = officeNumber;
  }
  // getRole() must be overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

const manager1 = new Manager(
  "Bob",
  "00123",
  "bob@mail.com",
  "720-111-2222 x1234"
);
console.log(manager1);
