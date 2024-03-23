/* 
t1:- Teztins
*/
import { mainHead, paraText } from "../UTILS/text.js";

mainHead("Maps access test");

// Array from 143.js
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

paraText("Print out the array and map");
console.log(currencies);
console.table(currencies);
