const inquirer = require('inquirer');

// A function that collects the user Input, storing the questions an array of objects of each question
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

// A function that validates the User Input's
// Checking the user's text input
// If user input > 0 && user input < 4
function validateText(text) {
    if (text.length > 0 && text.length < 4) {
        return text
    } else {
        console.log('Invalid Text Input, try again entering text within 1-3 Characters.')
        return null;
    }
}

// A Class for UserInput to help organize the data 
// we GET from getUserInput, and store into this class (In generateAnswers Function)
class UserInput {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shapeColor = '';
        this.shapeType = '';
    }
}

// A function to generate answers
// The 'async' keyword is used because we await the user's input from the 'getUserInput()' function.
async function generateAnswers() {

    // create a const to use for the UserInput Class
    const userInput = new UserInput();

    // created a const for the answers from the getUserInput
    const answers = await getUserInput();

    // Setting the User's input into the UserInput Class while also validates the user's input for the text
    userInput.text = validateText(answers.text);
    userInput.textColor = answers.textColor;
    userInput.shapeColor = answers.shapeColor;
    userInput.shapeType = answers.shapeType;

    // returns the NEW userInput class with values
    return userInput;
}

// Exports the functions and classes within the answers.js to use in other JS files
module.exports = {
    UserInput,
    validateText,
    generateAnswers,
};