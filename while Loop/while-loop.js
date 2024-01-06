function getValidNumber() {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput = prompt("Please enter a number:");

    // Check if userInput is a valid number
    if (userInput === null) {
      // If the user clicks "Cancel"
      displayResult("Operation canceled.");
      return;
    } else if (!isNaN(userInput) && userInput.trim() !== "") {
      isValid = true;
    } else {
      displayResult("Invalid input. Please enter a valid number.");
    }
  }

  displayResult("You entered: " + userInput);
}

function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}

// Call the function when the page loads
getValidNumber();
