// A class for ALL Shapes
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

// SQUARE CLASS
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// CIRCLE CLASS
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// TRIANGLE CLASS
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150,0 50,150 250,150" fill="${this.color}" />`;
    }
}

// A function that checks the user's shapeType, and shapeColor
// Using the switch statement, checks if their input matches the cases below
// returning the shapeType & shapeColor they have chose
// if their input did not match any of the cases below, returns the default value of "null"
function createUserShape(shapeType, shapeColor) {
    switch (shapeType.toLowerCase()) {
        case 'square':
            console.log("User selected Square shape");
            return new Square(shapeColor);
        case 'circle':
            console.log("User selected Circle shape");
            return new Circle(shapeColor);
        case 'triangle':
            console.log("User selected Triangle shape");
            return new Triangle(shapeColor);
        default:
            console.log("Invalid shape!");
            return null;
    }
}

// A class for Svg
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    // a function/method that generates the syntax needed to create a .svg file for the User's Logo
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    // a function/method that takes in the text, and color setting the text element
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    // a function/method that takes in the User's chosen shape, using the render() method to 
    // give its specific svg syntax on creating that shape
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Exports the classes and functions within shapes.js for other JS files to use
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
    Svg,
    createUserShape,
};