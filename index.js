const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Are there installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is this project used for?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Choose the license type:',
      choices: ['MIT', 'GNU GPLVv3'],
      name: 'liscence',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then(answers => {
      fs.writeFile(`${answers.title}`, 
      JSON.stringify(answers, null, 2),
      err => err ? console.error(err) : console.log('Success'));
  }
  );