// Example 1: Basic Function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function
greet("Mamat");

// Example 2: Function with Return Value
function addNumbers(a, b) {
  return a + b;
}

// Call the function and store the result in a variable
let sum = addNumbers(5, 10);
console.log("Sum: " + sum);

// Example 3: Function Expression
let multiply = function (x, y) {
  return x * y;
};

// Call the function expression
let product = multiply(3, 4);
console.log("Product: " + product);

// Example 4: Arrow Function
let divide = (num1, num2) => {
  return num1 / num2;
};

// Call the arrow function
let quotient = divide(8, 2);
console.log("Quotient: " + quotient);
