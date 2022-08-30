const Manager = require("../lib/manager");

describe("Manager subclass", () => {
  it("Creates an object with name, id, email, and officeNumber key value pairs based on passed arguments", () => {
    // Arrange & Act
    const manager1 = new Manager(
      "Bob",
      "00123",
      "bob@mail.com",
      "720-111-2222 x1234"
    );
    //Assert
    expect(manager1).toEqual({
      name: "Bob",
      id: "00123",
      email: "bob@mail.com",
      officeNumber: "720-111-2222 x1234",
    });
  });
});
