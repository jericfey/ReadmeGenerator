//shipped module for file modification
const fs = require("fs");

//remote module for prompting the user to answer questions for content
const inquirer = require("inquirer");
const util = require("util");

//call generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

//write file
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
//Project Title, sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Need also Github username, email address
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username (No @ required)?",
      name: "username",
      default: "jericfey",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid username for GitHub is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      default: "jericfey@gmail.com",
    },
    {
      type: "input",
      message: "What is the name of your GitHub repository for this project?",
      name: "repo",
      default: "https://github.com/jericfey?tab=repositories",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid GitHub repo name is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
      default: "Project Title",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Please describe your project. ",
      name: "description",
      default: "Project Description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message:
        "If applicable, describe the steps required to install your project for the Installation section.",
      name: "installation",
      default: "Project Installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples of your project in use for the Usage section.",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for your project.",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message:
        "If applicable, provide guidelines on how other developers can contribute to your project.",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "If applicable, provide any tests written for your application and provide examples on how to run them.",
      name: "tests",
    },
  ]);
};

// function to initialize program
// function init() {
//   //Prompt user with questions
//   const input = inquirer.prompt(questions);
//   // console.log("User Response: ", input);

//   //send answers to generate markdown file
//   const markdown = generateMarkdown(input);

//   //write file
//   const writeFileAsync("README.md", markdown);
// }
const init = async () => {
  console.log("hi");
  try {
    const answers = await questions();

    const readme = generateMarkdown(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();

// GitHub license:
// ![GitHub](https://img.shields.io/github/license/jericfey/ReadmeGenerator?style=plastic)
