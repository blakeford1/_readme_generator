var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "Projet Title",
      message: "Project Title?",
      name: "title",
    },
    {
      type: "Description",
      message: "Description?",
      name: "description",
    },
    {
      type: "Table of Contents",
      message: "Table of Contents?",
      name: "contents",
    },
    {
      type: "Installation",
      message: "Installation?",
      name: "installation",
    },
    {
      type: "Usage",
      message: "Usage?",
      name: "usage",
    },
    {
      type: "License",
      message: "License?",
      name: "license",
    },
    {
      type: "Contributing",
      message: "Who is Contributing?",
      name: "contributing",
    },
    {
      type: "Tests",
      message: "Tests?",
      name: "tests",
    },
    {
      type: "Question",
      message: "User GitHub profile picture?",
      name: "question1",
    },
    {
      type: "Question",
      message: "User GitHub email?",
      name: "question2",
    },
  ])

  .then(function (answers) {
    console.log("answers ??", answers);

    var readMeText = `
      Project Title - ${answers.title}
      Description - ${answers.description}
      Table of Contents - ${answers.contents}
      Installation - ${answers.installation}
      Usage - ${answers.usage}
      License - ${answers.license}
      Contributing - ${answers.contributing}
      Tests - ${answers.tests}
      Question1 - ${answers.question1}
    `;

    fs.writeFile("readMe.md", readMeText, function (err) {
      console.log("err ??", err);
    });
  });
