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
