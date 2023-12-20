// NPM Packages needed for project
const fs = require('fs');
const { createUserShape, Svg } = require('./assets/shapes.js');
const { UserInput, generateAnswers } = require('./assets/answers.js');

// A function to write the .svg file with the data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Your SVG Logo is done Generating! 🥳");
    });
}

// A function that generates the User's Logo
// Takes in the answers from the user's input
function generateLogo(userInput) {
     // Check if the user provided text input
    if (userInput.text) {
        // Uses the createUserShape Function with the userInput of the shapeType and shapeColor, and turning it into a const
        const userShape = createUserShape(userInput.shapeType, userInput.shapeColor);

        // Creates the user's shape and writes the .svg file, putting in the user's shape syntax inside
        if (userShape) {
            // Uses and creates a new Svg class
            const svg = new Svg();
            // With the new Svg class we input the user's text and color answers to set the Text for their Logo
            svg.setTextElement(userInput.text, userInput.textColor);

            // Sets the shape element of the SVG using the user-created shape
            svg.setShapeElement(userShape);

            // Renders the User's Logo with complete SVG syntax
            svg.render();

            console.log("Writing shape to File")
            // Writes the rendered SVG syntax to a file named "logo.svg"
            writeToFile("logo.svg", svg.render());
        }
    }
}

// A function to initialize the app
// The 'async' keyword is used here because we are awaiting the user input from the 'getUserInput()' function.
// Once we obtain the answers, we proceed to generate the user input into a 'UserInput' class,
// providing us with organized user input data.
// The function returns the user-inputted answers.
async function init() {
    // Collect user input by generating answers to a set of questions
    const userInput = await generateAnswers();

    // Generate the user's logo using the collected user input
    generateLogo(userInput);
}

// Call the init function to start the application
init();