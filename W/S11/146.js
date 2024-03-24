/* 
146: forEach method - Maps , sets
*/
// === import zone
import { mainHead, paraText, subHead } from "../../UTILS/text.js";
import { currencies, movements } from "../S11/bankdata1.js";
//
mainHead("146: forEach method - Maps , sets");

subHead("Viz imported bank data");
console.table(movements);
console.table(currencies);

// == Work Zone ===

subHead("Calling foreach on map");
currencies.forEach(function (v, key, map) {
  console.log(`${key}: ${v}`);
});

subHead("Calling with sets");
const currUni = new Set(["INR", "CNY", "AED", "EUR", "INR"]);
console.log(currUni);

// Sets have not key or index
currUni.forEach(function (v, _v, m) {
  console.log(`${v}: ${v}`);
});
