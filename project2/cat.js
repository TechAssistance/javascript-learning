const filesystem = require('fs');

// Check if a file location is provided as an argument
if (process.argv.length < 3) {
  console.error('Please provide a file location as an argument.');
  process.exit(1);
}

// Get the file location from the command-line arguments
const fileLocation = process.argv[2];

// Read the file contents
filesystem.readFile(fileLocation, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  // Display the file contents to the console
  console.log(`File contents:\n${data}`);
});
