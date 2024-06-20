#!/usr/bin/node

function swap (a, b) {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function bubblesort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
      }
    }
  }
}

const args = process.argv.slice(2).map(Number);
const numbers = args.filter(num => !isNaN(num));

if (process.argv.length <= 3) {
  console.log(0);
} else {
  bubblesort(numbers);
  console.log(numbers[numbers.length - 2]);
}
