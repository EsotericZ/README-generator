const inquirer = require('inquirer');
const fs = require('fs');
// let ans = [];
const license = [
  ['Apache License 2.0','[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
  ['Boost Software License 1.0','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'], 
  ['GNU AGPLv3','[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'],
  ['GNU GPLVv3','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
  ['GNU LGPLv3','[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'],  
  ['ISC','[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'],
  ['Mozilla Public License 2.0','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0'],
  ['MIT License','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
  ['The Unlicense','[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
];

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
    // ans = answers;
    // console.log(ans);
    getLicense(answers);
      // fs.writeFile("README.md", 
//       `# ${answers.title}
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// ## Description 
// ${answers.description}

// ## Table of Contents
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [License](#License)
// - [Contributing](#Contributing)
// - [Tests](#Tests)
// - [Questions](#Questions)

// ## Installation
// ${answers.installation}
      
// ## Usage
// ${answers.usage}
      
// ## License
// ${answers.license}
      
// ## Contributing 
      
// ## Tests
      
// ## Questions
// GitHub Profile: [${answers.username}](https://www.github.com/${answers.username})  
// Additional questions? [Contact Me](mailto:${answers.email})`,
      // err => err ? console.error(err) : console.log('Success'));
  }
  );

function getLicense(answers) {
  for (const n in license) {
    if (answers.license === license[n][0]) {
      badge = license[n][1];
    }
  }
  answers.badge = badge;
  writeReadme(answers); 
}

function writeReadme(answers) {
  fs.writeFile("README.md", 
      `# ${answers.title}
${answers.badge}

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