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

describe("getEmail() function", () => {
  it("returns a string that functions as an HTML mailto: anchor tag", () => {
    // Arrange & Act
    const bob = new Employee("Bob", 2, "test@gmail.com");
    const emailLink = bob.getEmail();
    // Assert
    expect(emailLink).toEqual(
      `<a href="mailto:test@gmail.com">test@gmail.com</a>`
    );
  });
});
