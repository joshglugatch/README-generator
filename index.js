const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { report } = require("process");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project:"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
        },
        {
            type: "input",
            name: "installations",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
    ])
}



function generateMD(response){
    if(response.license == "MIT"){
        response.license = "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"
    }else if (response.license == "APACHE 2.0"){
        response.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (response.license == "GPL 3.0"){
        response.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if (response.license == "BSD 3"){
        response.license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }else{
        response.license = "None"
    }
    response.installations = "```" + response.installations + "```";
    response.tests = "```" + response.tests + "```";
    

    return`# ${response.title} 

${response.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation:
In order to install the necessary dependencies, open the console and run the following:

${response.installations}

### Usage:
${response.usage}

### License:
This project is licensed under:

${response.license}

### Contributing:
${response.contribute}

### Tests:
In order to test open the console and run the following:

${response.tests}

### Questions:


### Author:
${response.author}, ${response.email}

![picture](https://github.com/${response.username}.png?size=80)
    
 `
}

promptUser().then(function(response){
    const markdown = generateMD(response);
    return writeFileAsync("README.md", markdown);
}).then(function () {
        console.log("Generating README.md ...");
    }).catch(function(err){
    console.log(err)
})
