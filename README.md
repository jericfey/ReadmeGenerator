# Readme Generator 

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  ## Description

  Every project should contain a README that contains information about the application: what is the application for, how to use the application, how to report issues, and how to make contributions so other developers are likely to use and contribute. This is a command-line application that uses Node.js to dynamically generate a README.md file based on input provided by answers to questions about your project.

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  To generate your own README, you first have to install npm. Then install inquirer, and util package dependencies. Once those packages are installed you can run application.

  ## Usage
  *Instructions and examples of how to use:*
  
  >node index.js

  ![Gif demo of README Generator](./utils/ReadmeGenerator.gif)

  When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. From there, the application will generate markdown and a table of contents for the README file. The README will also include badges for your GitHub repo. Finally, fs.writeFile is used to generate your project's README.md file. 

  ## License
  The Unlicense
  This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

  ## Contributing
  
  ## Tests
  

  ## Questions
  For any questions: mailto:jericfey@gmail.com

  GitHub profile: https://github.com/jericfey



