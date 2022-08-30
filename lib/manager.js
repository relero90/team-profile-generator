const Employee = require("./employee");
console.log(Employee);

class Manager {
    constructor(name, id, email, officeNumber){
        // all of Employee's methods
        Employee.getName(name);
        Employee.getId(id);
        Employee.getEmail(email);
        // add officeNumber
        this.officeNumber = officeNumber
        // getRole() must be overridden to return 'Manager'
        getRole() {
            return Manager
        }
    }
}