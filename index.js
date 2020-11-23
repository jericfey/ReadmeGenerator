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
        "Provide instructions and examples of your project in use for the USAGE section.",
      name: "usage",
    },
    {
      type: "input",
      message: "Provide command to run application.",
      name: "usageCommand",
    },
    {
      type: "list",
      message: "Choose a license for your project.",
      name: "license",
      choices: [
        "MIT License",
        "GNU GPLv3",
        "Apache License 2.0",
        "The Unlicense",
      ],
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
const init = async () => {
  try {
    const answers = await questions();
    // console.log("Answers", answers);

    if (answers.license === "MIT License") {
      answers.badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      answers.licenseInfo =
        "The MIT License grants permission, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.";
    } else if (answers.license === "Apache License 2.0") {
      answers.badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      answers.licenseInfo =
        "The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative open source software development.";
    } else if (answers.license === "GNU GPLv3") {
      answers.badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      answers.licenseInfo =
        "The GNU General Public License is a free, copyleft license for software and other kinds of works.";
    } else {
      answers.badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      answers.licenseInfo =
        "This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.";
    }

    const readme = generateMarkdown(answers);
    // console.log("Readme: ", readme);

    await writeFileAsync("README.md", readme);

    console.log("Successfully generated to README.md");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
