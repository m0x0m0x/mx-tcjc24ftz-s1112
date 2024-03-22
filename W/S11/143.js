/* 
143: Simple Arrays
*/
// === import zone
import { mainHead, subHead } from "../../UTILS/text.js";
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
