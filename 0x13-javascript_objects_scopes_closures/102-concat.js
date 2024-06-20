#!/usr/bin/node
const fs = require('fs');

// Get the file paths from command line arguments
const [, , fileA, fileB, fileC] = process.argv;

console.log(`File A: ${fileA}`);
console.log(`File B: ${fileB}`);
console.log(`File C: ${fileC}`);

try {
  // Read fileA and fileB synchronously
  const dataA = fs.readFileSync(fileA, 'utf8');
  const dataB = fs.readFileSync(fileB, 'utf8');

  // Concatenate dataA and dataB
  const concatenatedData = dataA + dataB;

  // Write concatenated data to fileC
  fs.writeFileSync(fileC, concatenatedData, 'utf8');

  console.log(`Files ${fileA} and ${fileB} successfully concatenated to ${fileC}`);
} catch (err) {
  console.error('Error:', err.message);
}
