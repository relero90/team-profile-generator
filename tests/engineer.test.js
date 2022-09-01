const Engineer = require("../lib/engineer");

describe("Engineer subclass", () => {
  it("Creates an object with name, id, email, and github key value pairs based on passed arguments", () => {
    // Arrange & Act
    const engineer1 = new Engineer(
      "Bill",
      "00456",
      "bill@mail.com",
      "billyboy"
    );
    //Assert
    expect(engineer1).toEqual({
      name: "Bill",
      id: "00456",
      email: "bill@mail.com",
      github: "billyboy",
    });
  });
});

describe("getGitHub() function", () => {
  it("returns a string of a functioning HTML anchor tag that opens the user's github profile in a new tab", () => {
    const bob = new Engineer("Bob", 22, "bob@gmail.com", "bobCodes");
    const gitHubLink = bob.getGitHub();

    expect(gitHubLink).toEqual(
      `<a href="https://github.com/bobCodes" target="_blank">bobCodes<a>`
    );
  });
});
