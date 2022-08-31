const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
    when: (answers) => answers.employeeRole === "Add an Engineer",
  },
  {
    type: "prompt",
    message: "What is this engineer's id?",
    name: "id",
    when: (answers) => answers.employeeRole === "Add an Engineer",
  },
  {
    type: "prompt",
    message: "What is this engineer's email?",
    name: "email",
    when: (answers) => answers.employeeRole === "Add an Engineer",
  },
  {
    type: "prompt",
    message: "What is this engineer's GitHub username?",
    name: "github",
    when: (answers) => answers.employeeRole === "Add an Engineer",
  },
];
const internQuestions = [
  {
    type: "prompt",
    message: "What is this intern's name?",
    name: "name",
    when: (answers) => answers.employeeRole === "Add an Intern",
  },
  {
    type: "prompt",
    message: "What is this intern's id?",
    name: "id",
    when: (answers) => answers.employeeRole === "Add an Intern",
  },
  {
    type: "prompt",
    message: "What is this intern's email?",
    name: "email",
    when: (answers) => answers.employeeRole === "Add an Intern",
  },
  {
    type: "prompt",
    message: "Where does this intern attend school?",
    name: "gitHub",
    when: (answers) => answers.employeeRole === "Add an Intern",
  },
];

// to begin, pass "node index.js team-build" in the terminal
function init() {
  if (process.argv[2] === "team-build") {
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
    console.log(team);
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
        console.log("done!");
      // exit the application and generate HTML based on user inputs
      // fs.writeFile("./dist/index.html", HTMLtextstring, (error) => error ? console.error(error) : console.log("Success!")
    }
  });
}
