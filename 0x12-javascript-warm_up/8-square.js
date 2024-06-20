#!/usr/bin/node

const max = parseInt(process.argv[2]);
const x = 'X';

if (isNaN(max) || process.argv.length <= 2) {
  console.log('Missing size');
} else {
  for (let i = 0; i < max; i++) {
    let row = '';
    for (let j = 0; j < max; j++) {
      row += x;
    }
    console.log(row);
  }
}
