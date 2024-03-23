/* 
143: Simple Arrays
*/
// === import zone
import { mainHead, paraText, subHead } from "../../UTILS/text.js";
// ===
mainHead("143: Simple Arrays");

/* 
This section was extracted from 
https://github.com/m0x0m0x/m-ujs-v1/blob/main/cursa/11-Arrays-Bankist/starter/script.js#L68-L74
- You need to to back here for working on those files later 
*/
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

subHead("Examine the data structues ");
console.table(currencies);
console.table(movements);

subHead("Array Methods Learning");

// Simple array
let arr = ["a", "b", "c", "d", "e"];

paraText("Slice Method - extract part of array");

// Slicing from position  - array.slic(start, end)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//Shadow copy
console.log(arr.slice());

// Using spread operator
console.log([...arr]);

subHead("Splice Method - Change original array - Array Mutation");
// console.log(arr.splice(2));
console.log(arr);

// Usual use to remove last element
arr.splice(-1);
console.log(arr);

// Secon param is the remove count
arr.splice(1, 2);
console.log(arr);

subHead("Reverse");

const arr2 = ["j", "i", "h", "g", "f"];

// reverse method mutates array
console.log(arr2.reverse());
console.log(arr2);

subHead("Concat - Concatenate Array");

// Do on arr and arr2
const lettrs = arr.concat(arr2);
console.log(lettrs);

// This block is your testing
let arr11 = ["h", "e"];
let arr12 = ["e", "l", "l", "o"];
const arr11ar12 = arr11.concat(arr12);
console.log(arr11ar12);

// Same above function and both arrays concatenated but not stored in a variable
console.log([...arr11, ...arr12]);

subHead("Join Method also similar to concat");
// Joins the letter with a character
console.log(arr11ar12.join(" - "));
console.log();
