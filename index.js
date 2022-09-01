const inquirer = require("inquirer");
const chalk = require("chalk");
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
    message: "Would you like to add another team member? (Use the arrow keys.)",
    name: "employeeAdd",
    choices: [
      "Add an Engineer",
      "Add an Intern",
      "I don't need to add another team member.",
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
    console.log(chalk.magenta("Welcome to the team profile builder."));
    console.log(
      chalk.blue(
        "Answer the prompts that follow to automatically generate a profile webpage for your team."
      )
    );
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
  // ask the addEmployeeQuestion - present questions based on user response
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
          // prompt to add another employee
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
          // prompt to add another employee
          promptForEmployee();
        });
        break;
      default:
        console.log(
          chalk.magenta(
            "Success!\nCheck the dist/ directory for your index.html file."
          )
        );
        renderNewHTML(team);
    }
  });
}

function renderNewHTML(team) {
  fs.writeFileSync(distPath, htmlTemplate(team), "utf-8");
}
