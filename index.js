const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

let teamArray = []

addManager();

function addManager(){
  // Have a prompt that asks all the manager questions
  // .then() we save the manager in the team array and run the mainMenu() function
}

function mainMenu(){
  // it should ask me do I want to add an engineer, and intern or do I want to build the team.
}

function addEngineer(){
  // this function asks the engineer questions
  //.then() save the engineer in the team array and run the mainMenu() function
}

function addIntern() {
  // this function asks the intern questions
  // .then() save the intern in the team array and run the mainMenu() function
}
function buildTeam() {
  // this function generates the finished HTML pg and saves it
}
  const promptUser = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if(nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter ID',
         validate: idInput => {
           if(idInput) {
          return true;
        } else {
          console.log('Please enter your ID!');
          return false;
          }
        } 
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email',
         validate: emailInput => {
          if(emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
          }
        }
      }
    ]);
  };

  // If there's no 'employee' array property, create one
  if (!employeeData.profiles) {
    employeeData.profiles = [];
  }
 
  return inquirer
  
  .then(teamMember => {
  employeeData.profile.push(teamMember);
  if (teamMember.confirmAddProfile) {
    return promptProfile(employeeData);
  } else {
    return employeeData;
  }
});

  promptUser()
  .then(promptProfile)
  .then(employeeData => { 
    // const pageHTML = generatePage();

    // fs.writeFile('index.html', generatePage(name, github), err => {
    //   if (err) throw err;
    
    //   console.log('Portfolio complete! Check out index.html to see the output!');
    // });
  });


//     .then((answers) => {
//       const patricia = new Employee(answers.name, "1818", "hello@gmail.com");
//       console.log(patricia.getName());
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });
// // }
// entryPoint();

