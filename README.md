(data, image, email) => {
      console.log(data);
      return `
  # ${data.title}
  ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
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
  <img src="${image}" alt="avatar" style="border-radius: 16px" width="30"/>
  If you have any questions about the repo, open an issue or contact@
  [${data.username}]${email}
    `;
    }