const Intern = require("../lib/intern");

describe("Intern subclass", () => {
  it("Creates an object with name, id, email, and school key value pairs based on passed arguments", () => {
    // Arrange & Act
    const intern1 = new Intern(
      "Bowie",
      "00789",
      "bowie@mail.com",
      "University of Denver"
    );
    //Assert
    expect(intern1).toEqual({
      name: "Bowie",
      id: "00789",
      email: "bowie@mail.com",
      school: "University of Denver",
    });
  });
});
