const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const htmlTemplate = require("./src/htmlTemplate.js");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const team = [];

// Inquirer Prompt Arrays
const addEmployeeQuestion = [
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "employeeAdd",
    choices: [
      "Add an Engineer",
      "Add an Intern",
      "I don't need to add any more team members.",
    ],
  },
];
const managerQuestions = [
  {
    type: "prompt",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "prompt",
    message: "What is the team manager's id?",
    name: "id",
  },
  {
    type: "prompt",
    message: "What is the team manager's email?",
    name: "email",
  },
  {
    type: "prompt",
    message: "What is the team manager's office phone number?",
    name: "officePhone",
  },
];
const engineerQuestions = [
  {
    type: "prompt",
    message: "What is this engineer's name?",
    name: "name",
  },
  {
    type: "prompt",
    message: "What is this engineer's id?",
    name: "id",
  },
  {
    type: "prompt",
    message: "What is this engineer's email?",
    name: "email",
  },
  {
    type: "prompt",
    message: "What is this engineer's GitHub username?",
    name: "github",
  },
];
const internQuestions = [
  {
    type: "prompt",
    message: "What is this intern's name?",
    name: "name",
  },
  {
    type: "prompt",
    message: "What is this intern's id?",
    name: "id",
  },
  {
    type: "prompt",
    message: "What is this intern's email?",
    name: "email",
  },
  {
    type: "prompt",
    message: "Where does this intern attend school?",
    name: "school",
  },
];

// to begin, pass "node index.js build-team" in the terminal
function init() {
  if (process.argv[2] === "build-team") {
    promptForManager();
  }
}
init();

function promptForManager() {
  // prompt with managerQuestions
  inquirer.prompt(managerQuestions).then((data) => {
    // create a new manager object using the user's input data
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officePhone
    );
    // add manager object to team array
    team.push(manager);
    // prompt to add another employee
    promptForEmployee();
  });
}

function promptForEmployee() {
  inquirer.prompt(addEmployeeQuestion).then((data) => {
    switch (data.employeeAdd) {
      case "Add an Engineer":
        // prompt with engineerQuestions
        inquirer.prompt(engineerQuestions).then((data) => {
          // create new engineer object with user input data
          const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
          );
          // add engineer object to team array
          team.push(engineer);
          console.log(team);
          promptForEmployee();
        });
        break;
      case "Add an Intern":
        // prompt with internQuestions
        inquirer.prompt(internQuestions).then((data) => {
          // create new intern object with user input data
          const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
          );
          // add intern object to team array
          team.push(intern);
          console.log(team);
          promptForEmployee();
        });
        break;
      default:
        renderEmployeeCards(team);
      // exit the application and generate HTML based on user inputs
      // fs.writeFile("./dist/index.html", HTMLtextstring, (error) => error ? console.error(error) : console.log("Success!")
    }
  });
}

function renderEmployeeCards(team) {
  fs.writeFileSync(distPath, htmlTemplate(team), "utf-8");
}

function renderFinalHTML(cards) {
  // generate HTML string with employee cards included
  const htmlStart = `
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
        <section class="m-5 d-flex flex-wrap justify-content-around">`;

  const htmlEnd = `      
        </section>
    </main>
  </body>
</html>`;
}
