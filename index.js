const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createFile = require("./utils/generate-readme");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project's title? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("please enter a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description (Required)",
    validate: (descriptInput) => {
      if (descriptInput) {
        return true;
      } else {
        console.log("please enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain what your application is used for (user story)",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose which license your application is covered under",
    choices: ["MIT", "GNU GPLv3", "Mozilla", "Apache"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Explain contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide testing instructions",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  {
    type: "input",
    name: "githubuser",
    message: "Enter your GitHub username",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// Create a function to write README file
promptUser()
  .then((answers) => generateMarkdown(answers))
  .then((fileContent) => {
    return createFile(fileContent);
  });
