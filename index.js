//shipped module for file modification
const fs = require("fs");

//remote module for prompting the user to answer questions for content
const inquirer = require("inquirer");

//call generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
//Project Title, sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Need also Github username, email address
const questions = [
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
    message: "How to install ?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
