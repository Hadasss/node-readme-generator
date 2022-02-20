// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return ``;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)";
  } else if (license == "Mozilla") {
    return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "GNU GPLv3") {
    return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Apache") {
    return "[License](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    This app is covered under ${license} license.
    ${renderLicenseLink(license)}
    `;
  } else if (!license) {
    return "";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectTitle}   ${renderLicenseBadge(data.license)}

  ## Project Description
  ${data.description}

  ## Table Of Contents
  - [Installation Instructions](#installation)
  - [App Usage](#usage)
  - [License](#license)
  - [App Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage}

  ## License
 ${renderLicenseSection(data.license)}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For more information or questions about the project, contact ${
    data.email
  } or DM me on GitHub: [${data.githubuser}](https://github.com/${
    data.githubuser
  }/).
`;
}

module.exports = generateMarkdown;

// FYI property names for the data object:
// {
//   projectTitle: '',
//   description: '',
//   installation: '',
//   usage: '',
//   license: [ 'MIT' ],
//   contributing: false,
//   tests: '',
//   email: '',
//   githubuser: ''
// }
