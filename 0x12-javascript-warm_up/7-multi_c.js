#!/usr/bin/node

const max = parseInt(process.argv[2]);

if (isNaN(max) || process.argv.length <= 2) {
  console.log('No Argument');
} else {
  for (let counter = 0; counter < max; counter++) {
    const content = 'C is fun';
    console.log(content);
  }
}
