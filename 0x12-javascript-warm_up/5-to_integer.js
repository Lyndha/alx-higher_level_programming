#!/usr/bin/node

const myNum = process.argv[2];
const resNum = myNum / 1;

if (!isNaN(resNum)) {
  console.log(`My number: ${myNum}`);
} else {
  console.log('Not a number');
}
