const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

//validation to ensure that user input provided is in the proper expected format
// {
//     type: 'input',
//     name: 'link',
//     message: 'Enter GitHub',
//     validate: idInput => {
//      if(githubInput){
//      return true;
//      } else {
//      console.log('Please enter your GitHub username!');
//      return false;
//      }
//  }
//},
// GitHub opens in new tab