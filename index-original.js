//shipped module for file modification
const fs = require("fs");

//remote module for prompting the user to answer questions for content
const inquirer = require("inquirer");

//call generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

//Project Title, sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Need also Github username, email address
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description of your project.",
      name: "description",
    },
  ])
  .then((data) => {
    //generate the html
    const filename = `${data.title.toLowerCase().split(" ").join("")}README.md`;

    fs.writeFile(
      filename,
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body style="font-family: sans-serif; color: #3c3939; background-color: #f1f1f1;">
    <div class="profile-card"
        style="width: 400px; margin: auto; background: #fff; box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);">
        <div class="image-container" style="position: relative;">
            
            <div class="title" style="position: absolute; left: 15px; bottom: 0;">
                <h2>${data.username}</h2>
            </div>
        </div>
        <div class="main-container" style="padding:20px">
            <p><i class="fa fa-briefcase info" style="color: #4b4fe2; margin-right: 16px"></i>Title</p>
            <p><i class="fa fa-home info" style="color: #4b4fe2; margin-right: 16px"></i>City</p>
            <p><i class="fa fa-envelope info" style="color: #4b4fe2; margin-right: 16px"></i>Email</p>
            <p><i class="fa fa-phone info" style="color: #4b4fe2; margin-right: 16px"></i>Phone number</p>
            <hr>
            <p><b><i class="fa fa-asterisk info" style="color: #4b4fe2; margin-right: 16px">Skills</i></b></p>
            <p>Skill 1</p>
             </div>
        </div>
    </div>
</body>
</html>
    `,

      (err) => (err ? console.log(err) : console.log("Generating README..."))
    );
  });
