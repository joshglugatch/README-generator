const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title:"
        },
        {
            type: "input",
            name: "description",
            message: "Description:"
        }
    ])
}

function generateMD(response){
    return`# ${response.title}
    
${response.description}


    
    `
}

promptUser().then(function(response){
    const markdown = generateMD(response);
    return writeFileAsync("README.md", markdown);
}).then(function(){
    console.log("Markdown written.")
}).catch(function(err){
    console.log(err)
})