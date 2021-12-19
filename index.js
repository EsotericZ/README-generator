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
      choices: [
        'Apache License 2.0',
        'Boost Software License 1.0', 
        'GNU AGPLv3', 
        'GNU GPLVv3',
        'GNU LGPLv3',  
        'ISC', 
        'Mozilla Public License 2.0',
        'MIT License',
        'The Unlicense'
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Email address for the contact me?',
      name: 'email',
    },
  ])
  .then(answers => {
      fs.writeFile("README.md", 
      `# ${answers.title}
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

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
GitHub Profile: [${answers.username}](https://www.github.com/${answers.username})  
Additional questions? [Contact Me](mailto:${answers.email})`,
      err => err ? console.error(err) : console.log('Success'));
  }
  );