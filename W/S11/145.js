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
    console.log(`Money IN %c${mvmt}`, "color:green");
  } else {
    console.log(`Money out %c${mvmt}`, "color:red");
  }
}

// Doign above with the foreach method
paraText("Using the Foreach method");
movements.forEach(function (mvm) {
  if (mvm > 0) {
    console.log(`Money 💰 %c${mvm}`, "color:green");
  } else {
    console.log(`Money 💸 %c${mvm}`, "color:red");
  }
});
/* 
Above function works like this 
1 - function(200)
2 - function(450)
3 - function(-500)
*/

paraText("Accessing counter variable in for..of Loop");
