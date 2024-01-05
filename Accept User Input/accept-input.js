function displayInput() {
  // Get the value from the input element
  let userInput = document.getElementById("userInput").value;

  // Display the user input
  let outputElement = document.getElementById("output");
  outputElement.textContent = "You entered: " + userInput;
}
