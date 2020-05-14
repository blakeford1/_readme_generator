var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    // {
    //   type: "input",
    //   message: badge badge badge badge,
    //   name: "username"
    // },
    {
      type: "Projet Title",
      message: "What is the name of your Project?",
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
      message: "usage?",
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
    `;

    fs.writeFile("readMe.md", readMeText, function (err) {
      console.log("err ??", err);
    });
    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });
