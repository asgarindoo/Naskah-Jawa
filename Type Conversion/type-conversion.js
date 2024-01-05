// Implicit Type Conversion (Type Coercion)
let numberValue = 42;
let stringValue = "The answer is: " + numberValue;
console.log(stringValue); // "The answer is: 42"

// Explicit Type Conversion
// String to Number
let stringNumber = "42";
let convertedNumber = Number(stringNumber);
console.log(convertedNumber); // 42

// Number to String
let numberValueAgain = 42;
let convertedString = String(numberValueAgain);
console.log(convertedString); // "42"

// Boolean to String
let booleanValue = true;
let convertedStringBoolean = String(booleanValue);
console.log(convertedStringBoolean); // "true"

// String to Boolean
let stringValueBoolean = "true";
let convertedBoolean = Boolean(stringValueBoolean);
console.log(convertedBoolean); // true

// parseInt() and parseFloat()
let stringNumberForParse = "42.5";
let parsedInt = parseInt(stringNumberForParse);
let parsedFloat = parseFloat(stringNumberForParse);
console.log(parsedInt); // 42
console.log(parsedFloat); // 42.5

// Truthy and Falsy Values
let truthyValue = true;
let falsyValue = false;
console.log(Number(truthyValue)); // 1
console.log(Number(falsyValue)); // 0
