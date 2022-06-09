const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter project title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description that explains the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What tests can you perform?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Provide your license.',
        choices: ['Apache', 'MIT', 'GNU', 'Boost'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Provide your github username for any questions.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Provide your email for any questions.',
        name: 'email',
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            console.log(response);
            const md = generateMarkdown({ ...response });
            const fileName = response.title.split(" ").join("").toLowerCase() + ".md";
            writeToFile(fileName, md);
        })
}

init();
