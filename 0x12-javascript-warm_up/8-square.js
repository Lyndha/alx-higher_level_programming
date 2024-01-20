#!/usr/bin/node
/* Write a script that prints a square
 * The first argument is the size of the square
 * If the first argument can’t be converted to an integer, print “Missing size”
 * You must use the character X to print the square
 * You must use console.log(...) to print all output
 * You are not allowed to use var
 * You must use a loop (while, for, etc.)
 */

if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const x = Number(process.argv[2]);
  for (let i = 0; i < x; i++) {
    console.log('X'.repeat(x));
  }
}
/* let i = 0;
  while (i < x) {
    console.log('X'.repeat(x));
    i++;
  }
} */
