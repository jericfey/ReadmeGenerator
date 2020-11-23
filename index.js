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

// const badge = (answer) => {
//   if (questions.name.license === "GNU GPLv3") {
//     return;
//   } else if (questions.name.license === "Apache License 2.0") {
//     console.log("This kinda worked", answer.license);
//   } else {
//     console.log("This didn't work", answer.license);
//   }
// };

// function to initialize program
const init = async () => {
  try {
    const answers = await questions();
    // console.log("Answers", answers);

    if (answers.license === "MIT License") {
      answers.badge =
        "![MIT license](https://img.shields.io/github/license/jericfey/ReadmeGenerator?logo=MIT&style=plastic)";
      answers.licenseInfo =
        "The MIT License grants permission, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.";
    } else if (answers.license === "Apache License 2.0") {
      answers.badge = "https://img.shields.io/npm/l/inquirer?style=plastic";
      answers.licenseInfo =
        "The Apache License 2.0 makes sure that the user does not have to worry about infringing any patents by using the software. The user is granted a license to any patent that covers the software. This license is terminated if the user sues anyone over patent infringement related to this software. This condition is added in order to prevent patent litigations.";
    } else {
      answers.badge = "https://img.shields.io/npm/l/inquirer?style=plastic";
      answers.licenseInfo =
        "Software under the GPL may be run for all purposes, including commercial purposes and even as a tool for creating proprietary software, such as when using GPL-licensed compilers. Users or companies who distribute GPL-licensed works (e.g. software), may charge a fee for copies or give them free of charge. This distinguishes the GPL from shareware software licenses that allow copying for personal use but prohibit commercial distribution, or proprietary licenses where copying is prohibited by copyright law. The FSF argues that freedom-respecting free software should also not restrict commercial use and distribution (including redistribution).";
    }

    const readme = generateMarkdown(answers);
    // console.log("Readme: ", readme);

    await writeFileAsync("README.md", readme);

    // fs.appendFile("README.md", badge, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     // Get the file contents after the append operation
    //     console.log(
    //       "\nFile Contents of file after append:",
    //       fs.readFileSync("README.md", "utf8")
    //     );
    //   }
    // });

    console.log("Successfully generated to README.md");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();

// GitHub license:
// ![GitHub](https://img.shields.io/github/license/jericfey/ReadmeGenerator?style=plastic)
