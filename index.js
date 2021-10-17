const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const fs = require('fs');
const { profile } = require("console");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = (name, githubName) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
    `;
};

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

function entryPoint() {
  inquirer
    .prompt([
      /* Pass your questions in here */
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

