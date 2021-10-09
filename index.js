// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input", 
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input", 
            message: "Please enter the description of this project.",
            name: "description"
        },
        {
            type: "input", 
            message: "Please list the Table of Contents",
            name: "table of contents"
        },
        {
            type: "input", 
            message: "What is the installation process for this application?",
            name: "installation"
        },
        {
            type: "input", 
            message: "How is this application used?",
            name: "usage"
        },
        {
            type: "list", 
            message: "Which license is used for this project?",
            name: "license",
            choices: ["MIT", "GPL 3.0", "APACHE 2.0", "none"]
        },
        {
            type: "input", 
            message: "Please list the contribution guidelines, if any.",
            name: "contributing"
        },
        {
            type: "input", 
            message: "Please list this test instructions for this application.",
            name: "tests"
        },
        {
            type: "input", 
            message: "Please enter your email address.",
            name: "email"
        },
        {
            type: "input", 
            message: "Please enter your Github username.",
            name: "username"
        },
])
};

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFileSync( './README.md', generateMarkdown(response))
};


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((response) => writeToFile(response))
    .catch((err) => console.error(err));
 };


// Function call to initialize app
init();
