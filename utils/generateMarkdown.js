// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// to add an image in readme: ![alt text](assets/images/${license}.png)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectTitle}
  ![image](assets/images/mit.png)

  ## Project Description
  ${data.description}

  ## Table Of Contents
  - [${data.installation}] (#installation)
  - ${data.usage} (#Usage)
  - ${data.license} (#License)
  - ${data.contributing} (#Contributing)
  - ${data.tests}

  ## Installation Instructions
  ${data.installation} 

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For more information or questions about the project, contact email or DM me on GitHub: githubUser.
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
//   questions: ''
// }
