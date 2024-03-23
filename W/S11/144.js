/* 
144: New At Method
*/
// === import zone
import { mainHead, paraText, subHead } from "../../UTILS/text.js";
mainHead("144: New At Method");

const arr = [23, 11, 64];
console.log(arr[0]);

//using at method
console.log(arr.at(0));

paraText("Getting the last element");

//getting last input of the array
console.log(arr[arr.length - 1]);

// using the slice method - get array with the method
console.log(arr.slice(-1)[0]);

paraText("Usign the at method - uses concepts of slice method");
console.log(arr.at(-1));

paraText("At method in strings");
console.log("jam".at(-1));
