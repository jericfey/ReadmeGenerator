// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 

  ## Description

  ${answers.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  >${answers.installation}

  ## Usage
  *Instructions and examples of how to use:*

  ![Gif demo of README-generator](readme-demo.gif)

  ## License

  ## Contributing

  ## Tests

  ## Questions
  For any questions: mailto:${answers.email}
  GitHub profile: https://github.com/${answers.username}



`;
}

module.exports = generateMarkdown;
