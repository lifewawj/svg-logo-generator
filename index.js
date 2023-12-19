// TODO: NPM Packages needed for project
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: A function that collects the user Input, storing the questions an array of objects of each question
// text
// text-color
// shape-color
// shape
function getUserInput() {
    const questions = [
        // TEXT
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your Logo:'
        },
        // TEXT-COLOR
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text of your Logo:'
        },
        // SHAPE TYPE
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a shape for your Logo:',
            choices: ['Square', 'Circle', 'Triangle']
        },
        // SHAPE COLOR
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape of your Logo:'
        },
    ];

    return inquirer.prompt(questions)
}

// TODO: A function that validates the User Input's
// If user input > 0 && user input < 4
function validateText(text) {
    if (text.length > 0 && text.length < 4) {
        return text
    } else {
        console.log('Invalid Text Input, try again entering text within 1-3 Characters.')
        return null;
    }
}


// TODO: A function to write the .svg file with the data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success!");
    });
}

// TODO: A function to init the app

