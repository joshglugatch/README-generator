# README Generator  ![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)
Welcome to README Generator. README Generator will help users to create a readme using our template and the info the user inputs.
By using the inquirer npm we can gather info through node.js to build a readme for the user. The user will be asked for their project name, GitHub name, details, application instructions, etc. This info will be filled into the README Generator template and write the readme into the generatedREADME markdown file inside of the generated folder. It will contain a title, description, table of contents, installation instructions, etc.

For a walkthrough on using the app click [here.](http://www.youtube.com/watch?v=LRUqN-3SrFA)



## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Code Example
First I created the required variables to link to my dependencies. Some were autogenerated from Inquirer.
```
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { report } = require("process");
const util = require("util");
```

Next Inquirer is used to create the prompts for user info.
```
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


            etc...
```
Responses are placed in README template.
```
return`# ${response.title}  ${badge}

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

\`\`\`${response.installations}\`\`\`

### Usage:
${response.usage}

### License:
This project is licensed under:

${response.license}

etc...
```

Template is written to "generatedREADME.md".
```
promptUser().then(function(response){
    const markdown = generateMD(response);
    return writeFileAsync("./generated/generatedREADME.md", markdown);
}).then(function () {
        console.log("Generating README.md ...");
    }).catch(function(err){
    console.log(err)
})

```


### Installation:
The README Generator repository already contains the dependencies you will need inside the "package.json" file.
In order to install the necessary dependencies, just open the console and run the following:

```npm install```

### Usage:
The generator will overwrite anything in the generatedREADME markdown file. Make sure to move any changes you may want to keep. For this reason it is generated in the folder "generated" to protect against accidentally overwriting user's current readme.

### License:
This project is licensed under:

MIT

### Questions:
If you have any questions contact me on [GitHub](https://github.com/joshglugatch) or contact 
Josh Glugatch at joshglugatch@gmail.com

![picture](https://github.com/joshglugatch.png?size=80)

<br>

[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/joshglugatch)
<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/joshua-glugatch)