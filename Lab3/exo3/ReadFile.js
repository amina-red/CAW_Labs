// ReadFile.js

const fs = require('fs');


const [, , fileName] = process.argv;

// Check 
if (!fileName) {
  console.error('Please provide a file name to read.');
} else {
  // Read the file
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the file ${fileName}:`, err);
    } else {
      console.log('Contents of the file:');
      console.log(data);
    }
  });
}
