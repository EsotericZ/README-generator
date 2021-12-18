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
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then(answers => {
      fs.writeFile("README", 
      `# ${answers.title}

## Description 
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${answers.installation}
      
## Usage
${answers.usage}
      
## License
${answers.license}
      
## Contributing 
      
## Tests
      
## Questions  
      `,
      err => err ? console.error(err) : console.log('Success'));
  }
  );