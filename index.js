const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Github Username?",
    },
    {
      type: "input",
      name: "title",
      message: "Please write a title for your project",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependecies?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
}

var user = (data) => {
  var queryUrl = `https://api.github.com/users/${data.username}`;
  return axios.get(queryUrl);
};

const readMeTxt = (data, image, email) => {
  console.log(data);
  return `
# ${data.title}
(![AppVeyor](https://img.shields.io/appveyor/build/blakeford1/_readme_generator))
## Description
${data.description}
## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
 *[Contributing](#contributing)
 *[Tests](#tests)
*[Questions](#questions)
  
## Installation
To install necessary dependencies, run the following command:
${data.installation}
## Usage
${data.usage}
## License
This project is licensed under the ${data.usage} license.
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
${data.tests}
## Questions
<img src="${image}" alt="avatar" style="border-radius: 18px" width="35"/>
If you have any questions about the repo, open an issue or contact@
[${data.username}]${email}
  `;
};

async function init() {
  console.log("Generating README");
  try {
    let data = await questions();

    let res = await user(data);

    let markdown = readMeTxt(data, res.data.avatar_url, res.data.html_url);

    await writeFileAsync("README.md", markdown);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
