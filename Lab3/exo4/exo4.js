// exo4.js

const fs = require('fs');

function writeToFile(fileName, text) {
  fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to the file ${fileName}:`, err);
    } else {
      console.log('The file has been saved!');
      
      // Read and display the contents of the created file
      fs.readFile(fileName, 'utf8', (readErr, data) => {
        if (readErr) {
          console.error(`Error reading the file ${fileName}:`, readErr);
        } else {
          console.log(`Contents of the file ${fileName}:`);
          console.log(data);
        }
      });
    }
  });
}

// Get command line arguments
const [, , fileName, ...textArray] = process.argv;

// Join the remaining command line arguments to form the text
const text = textArray.join(' ');

// Check if the file name and text are provided
if (!fileName || !text) {
  console.error('Please provide a file name and text to be saved.');
} else {
  writeToFile(fileName, text);
}
