const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// code to generate HTML is already done.

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamInfo = [];

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "add",
      },
    ])
    .then(({ add }) => {
      if (add) {
        employeeBuild();
      } else {
        const teamOutput = render(teamInfo);
        fs.writeFile(outputPath, teamOutput, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
    });
};

const employeeBuild = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid email address.";
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: [
          { name: "Manager", value: managerBuild },
          { name: "Engineer", value: engineerBuild },
          { name: "Intern", value: internBuild },
        ],
      },
    ])
    .then(({ name, id, email, role }) => {
      role(name, id, email);
    });
};

const managerBuild = (name, id, email) =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice",
      },
    ])
    .then(({ managerOffice }) => {
      const manager = new Manager(name, id, email, managerOffice);
      teamInfo.push(manager);
  
      addEmployee();
    });

const engineerBuild = (name, id, email) =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee GitHub username?",
        name: "gitHub",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid username.  Make sure username doesn't include spaces.";
          } else {
            return true;
          }
        },
      },
    ])
    .then(({ gitHub }) => {
      const engineer = new Engineer(name, id, email, gitHub);
      teamInfo.push(engineer);
      
      addEmployee();
    });
const internBuild = (name, id, email) =>
  inquirer
    .prompt([
      {
        type: "input",
        message: " What is the Intern's School name?",
        name: "school",
      },
    ])
    .then(({ school }) => {
      const intern = new Intern(name, id, email, school);
      teamInfo.push(intern);
      addEmployee();
    });
employeeBuild();

