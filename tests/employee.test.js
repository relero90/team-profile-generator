const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("Creates an object with name, id, and email key value pairs based on passed arguments", () => {
    // Arrange & Act
    const obj = new Employee("Becca", 1, "username@email.com");
    //Assert
    expect(obj).toEqual({
      name: "Becca",
      id: 1,
      email: "username@email.com",
    });
  });
});

//getName()
//getId()
//getEmail()
//getRole()—returns 'Employee'
