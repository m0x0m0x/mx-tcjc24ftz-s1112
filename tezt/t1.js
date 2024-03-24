/* 
t1:- Teztins
*/
import { mainHead, paraText, subHead } from "../UTILS/text.js";

mainHead("Maps access test");

// Array from 143.js
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

paraText("Curencies ");
console.log(currencies);
console.table(currencies);

paraText("Movements array");
console.log(movements);
console.table(movements);

subHead("Accessing elements of map curencies");
console.log(currencies.get("USD"));

paraText("Using array.entries metho");

// This entries method is an iterator
console.log(movements.entries());

paraText("Testing Functions");
const mvFunc1 = function () {
  for (const [i, mvmt] of movements.entries()) {
    if (mvmt > 0) {
      console.log(`Money 💰 %c${mvmt}`, "color:green");
    } else {
      console.log(`Money 💸 %c${mvmt}`, "color:red");
    }
  }
};

// mvFunc1();

// same above function written in standard function format

function mvFunc2() {
  for (const [i, mvmt] of movements.entries()) {
    if (mvmt > 0) {
      console.log(`Money 💰 %c${mvmt}`, "color:green");
    } else {
      console.log(`Money 💸 %c${mvmt}`, "color:red");
    }
  }
}

mvFunc2();

// Testing string methdods whcih you forgot

let booty1 = "smellIt";
console.log(booty1.toUpperCase());
console.log(booty1[0].toUpperCase());

subHead("Diff Between Function Delcration and Function Expression");

function makeCap(name) {
  console.log(name[0].toUpperCase() + name.slice(1));
}
makeCap("hi");

const makeCap2 = function (name) {
  console.log(name[0].toUpperCase() + name.slice(1));
};

makeCap2("hi");

paraText(
  `
  1. FD and FE both dont have any pref diff
  2. FE = when you want to just call it once 
  3. FD = when you want to reuse function and can be called anywhere , Hositing
  4. FE = Youc an can reassign the values to any variable , where are FD's bascially constants 
  5. So you need to choose which one to use based on the situation 
  `
);
