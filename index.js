const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const workers = [];

// Inquirer Prompt Arrays
const employeeAddQuestion = [
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

function promptForManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officePhone
    );
    workers.push(manager);
    console.log(workers);
  });
}

function promptForEmployee() {
  inquirer.prompt(employeeAddQuestion).then((data) => {
    switch (data.employeeAdd) {
      case "Add an Engineer":
        // prompt with engineerQuestions
        inquirer.prompt(engineerQuestions).then((data) => {
          // create new engineer object with user input values
          const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
          );
          // add engineer object to workers array
          workers.push(engineer);
          console.log(workers);
        });
        break;
      case "Add an Intern":
        // prompt with internQuestions
        inquirer.prompt(internQuestions).then((data) => {
          // create new intern object with user input values
          const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
          );
          // add intern object to workers array
          workers.push(intern);
          console.log(workers);
        });
        break;
      default:
        console.log("done!");
        // exit the application and generate HTML based on user inputs
        // fs.writeFile("./dist/index.html", markdownPull, (error) => error ? console.error(error) : console.log("Success!")
    }
  });
}

function init() {
  if (process.argv[2] === "go") {
    promptForManager();
    promptForEmployee();
  }
}
init();
