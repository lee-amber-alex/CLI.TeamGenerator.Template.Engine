const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamInfo = [];

const employeeBuild = () => 
 inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "manager",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid email address.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice",
      },
      {
        type: "list",
        message: " Which type of team member would you like to add?",
        name: "teammember",
        choices: ["Engineer", "Intern", "No additional to add."],
      },
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineer",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid email address.";
          } else {
            return true;
          }
        },
      },
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
      {
        type: "list",
        message: " Which type of team member would you like to add?",
        name: "teammember",
        choices: ["Engineer", "Intern", "No additional to add."],
      },
      {
        type: "input",
        message: "What is the intern's name?",
        name: "intern",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "interId",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid email address.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: " What is the Intern's School name?",
        name: "school",
      },
      {
        type: "list",
        message: " Which type of team member would you like to add?",
        name: "teammember",
        choices: ["Engineer", "Intern", "No additional to add."],
      },
    ])
    .then((response) => {
    
      console.log(response);

    });
  
    employeeBuild();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
