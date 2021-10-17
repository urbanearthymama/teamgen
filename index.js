const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// console.log(name, github);

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

function entryPoint() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
    ])
    .then((answers) => {
      const patricia = new Employee(answers.name, "1818", "hello@gmail.com");
      console.log(patricia.getName());
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
entryPoint();

