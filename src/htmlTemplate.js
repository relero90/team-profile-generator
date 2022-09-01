const createTeam = (team) => {
  // function to create a card for a manager
  const createManager = (manager) => {
    return `
<div class="card mt-3 shadow" style="width: 18rem">
    <div class="card-body bg-primary text-light">
        <h3 class="text-center" id="name">${manager.getName()}</h3>
        <div class="d-flex">
            <i class="fa-solid fa-mug-hot m-2"></i>
            <h5 class="card-title">${manager.getRole()}</h5>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Phone: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`;
  };
  // function to create a card for an engineer
  const createEngineer = (engineer) => {
    return `
<div class="card mt-3 shadow" style="width: 18rem">
    <div class="card-body bg-primary text-light">
        <h3 class="text-center" id="name">${engineer.getName()}</h3>
        <div class="d-flex">
            <i class="fa-solid fa-glasses m-2"></i>
            <h5 class="card-title">${engineer.getRole()}</h5>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
    </ul>
</div>`;
  };
  // function to create a card for an intern
  const createIntern = (intern) => {
    return `
<div class="card mt-3 shadow" style="width: 18rem">
    <div class="card-body bg-primary text-light">
        <h3 class="text-center" id="name">${intern.getName()}</h3>
        <div class="d-flex">
            <i class="fa-solid fa-graduation-cap m-2"></i>
            <h5 class="card-title">${intern.getRole()}</h5>
        </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID#: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>`;
  };
  // empty array to contain all employee cards
  const htmlCardArray = [];

  // filter the team array for employee's with role "Manager" and map each result from createManager into an array
  // push the result (all manager cards - only 1) to the htmlCardArray
  htmlCardArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  // push all engineer cards to the htmlCardArray
  htmlCardArray.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );

  // push all intern cards to the htmlCardArray
  htmlCardArray.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );

  // return the htmlCardArray joined into a single string
  return htmlCardArray.join("");
};

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Style Link -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <!-- Icons from FontAwesome -->
        <script
          src="https://kit.fontawesome.com/d706540582.js"
          crossorigin="anonymous"
        ></script>
        <title>Team Profiles</title>
    </head>
    <body>
        <header
          class="d-flex justify-content-center align-items-center p-5 bg-danger"
        >
            <h1 class="text-light">Our Team</h1>
        </header>
        <main>
            <section class="m-5 d-flex flex-wrap justify-content-around">
                ${createTeam(team)}
            </section>
        </main>
    </body>
</html>`;
};
