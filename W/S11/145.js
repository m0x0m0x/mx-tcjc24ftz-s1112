/* 
145: Looping arrays for each method
*/
// === import zone
import { mainHead, paraText, subHead } from "../../UTILS/text.js";
import { currencies, movements } from "../S11/bankdata1.js";
//===

mainHead("145: Looping arrays 'for each' method");

subHead("For Each Method");

subHead("Examine exported objects");
// These are imported
console.log(currencies);
console.log(movements);

subHead("Using Standard Loop");
// using traditional method
for (const mvmt of movements) {
  if (mvmt > 0) {
    console.log(`Movement IN %c${mvmt}`, "color:green");
  } else {
    console.log(`Movement out %c${mvmt}`, "color:red");
  }
}

// Doign above with the foreach method
paraText("Using the Foreach method");
movements.forEach(function (mvm) {
  if (mvm > 0) {
    console.log(`Movement 💰 %c${mvm}`, "color:green");
  } else {
    console.log(`Movement 💸 %c${mvm}`, "color:red");
  }
});
/* 
Above function works like this 
1 - function(200)
2 - function(450)
3 - function(-500)
*/

paraText("Accessing counter variable in for..of Loop");
// Recaling the destructuring operator in this function
for (const [i, mvm] of movements.entries()) {
  if (mvm > 0) {
    console.log(`Movement ${i + 1}  💰 %c${mvm}`, "color:green");
  } else {
    console.log(`Movement ${i + 1}  💸 %c${mvm}`, "color:red");
  }
}

paraText("Accessing index in the foreach method");
// Here order is important inside the function
movements.forEach(function (mvm, i, arr) {
  if (mvm > 0) {
    console.log(`Movement ${i + 1} 💰 %c${mvm}`, "color:green");
  } else {
    console.log(`Movement ${i + 1} 💸 %c${mvm}`, "color:red");
  }
});
