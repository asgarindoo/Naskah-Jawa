let text = "Hello World!";
let resultElement = document.getElementById("result");
let result = "";

result += "Name string :" + text + "<br>" + "<br>" + "<br>";
// length
result += "Length: " + text.length + "<br>";

// toLowerCase
result += "toLowerCase: " + text.toLowerCase() + "<br>";

// toUpperCase
result += "toUpperCase: " + text.toUpperCase() + "<br>";

// charAt
result += "charAt(7): " + text.charAt(7) + "<br>";

// indexOf
result += "indexOf('World'): " + text.indexOf("World") + "<br>";

// substring
result += "substring(7, 12): " + text.substring(7, 12) + "<br>";

// Slicing
result += "Slicing(4, 8): " + text.slice(4, 8) + "<br>";

// replace
result +=
  "replace('World', 'Universe'): " + text.replace("World", "Universe") + "<br>";

// split
let fruits = "apple,orange,banana".split(",");
result += "split: " + fruits + "<br>";

// trim
result += "trim: " + text.trim() + "<br>";

// concat
let str1 = "Hello";
let str2 = "World";
result += "concat: " + str1.concat(", ", str2) + "<br>";

// startsWith
result += "startsWith('Hello'): " + text.startsWith("Hello") + "<br>";

// endsWith
result += "endsWith('World!'): " + text.endsWith("World!") + "<br>";

// includes
result += "includes('World'): " + text.includes("World") + "<br>";

let resultChaining = text
  .trim() // Menghapus spasi di awal dan akhir
  .toUpperCase() // Mengubah semua huruf menjadi huruf besar
  .replace("WORLD", "Universe"); // Mengganti "WORLD" dengan "Universe"

result +=
  "Method Chaining .trim() .toUpperCase() .replace('WORLD', 'Universe'): " +
  resultChaining;

// Displaying the result
resultElement.innerHTML = result;
