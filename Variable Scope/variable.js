// Global scope variable
var globalVar = "I am global";

function exampleFunction() {
  // Local scope variable
  var localVar = "I am local";
  console.log(localVar); // Accessible inside the function
}

exampleFunction();
console.log(globalVar); // Accessible outside the function

// Block scope variable (introduced in ES6 with let and const)
if (true) {
  let blockVar = "I am in a block";
  console.log(blockVar); // Accessible inside the block
}

// console.log(blockVar); // This would result in an error - blockVar is not defined outside the block
