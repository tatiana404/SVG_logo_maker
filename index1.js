// Required libraries
const readline = require('readline');
const fs = require('fs');
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");




// Function to create the SVG logo
function createSVGLogo(color, shape, text) {
  let shapeChoice;


  if (shape === "triangle") {
    shapeChoice = new Triangle();
    shapeChoice.setColor(color);

  } else if (shape === "square") {
    shapeChoice = new Square();
    shapeChoice.setColor(color);

  } else {
    shapeChoice = new Circle();
    shapeChoice.setColor(color);

  }
  let svgContent = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeChoice.render()}
    <text x="150" y="125" font-family="Arial" text-anchor="middle" font-size="30" fill="white">${text}</text>
  </svg>
`;
  return svgContent;
}

// Function to save the SVG logo to a file
function saveSVGToFile(svgContent, filename) {
  fs.writeFile(filename, svgContent, (err) => {
    if (err) {
      console.error('Error saving the SVG file:', err);
    } else {
      console.log(`Logo saved as ${filename}`);
    }
  });
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for input
rl.question('Enter the color for the logo: ', (color) => {
  rl.question('Enter the shape for the logo (e.g., "circle", "triangle","square"): ', (shape) => {
    rl.question('Enter the text for the logo: ', (text) => {
      if (text.length > 3) {
        console.error("please enter less then 4 letters, please run the application again");
        return;
      }

      rl.question('Enter the filename for the SVG file (e.g., "logo.svg"): ', (filename) => {
        // Generate the SVG logo
        let svgLogo = createSVGLogo(color, shape, text);

        // Save the SVG logo to a file
        saveSVGToFile(svgLogo, filename);

        // Close the readline interface
        rl.close();
      });
    });
  });
});


