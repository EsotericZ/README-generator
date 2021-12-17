const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then(answers => {
      fs.writeFile(`${answers.user}`, 
      JSON.stringify(answers, null, 2),
      err => err ? console.error(err) : console.log('Success'));
  }
  );