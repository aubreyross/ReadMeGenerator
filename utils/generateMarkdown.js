// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}


  ## Description
  ${response.description}

  ## Table of Contents
  - [Description] (#)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [License] (#license)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Installation
  Please install the following: ${response.installation}

  ## Usage
  To utilize this app: ${response.usage}

  ## License
  This project is licensed under ${response.license}. 
  ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)

  ## Contribution 
  ${response.contributing}

  ## Tests
  ${response.tests}

  ## Questions
  Should you have any questions, please direct to:

  * Email: [${response.email}] (mailto:${response.email})

  * Github: [${response.username}] (https://github.com/${response.username})

`;
}

module.exports = generateMarkdown;
