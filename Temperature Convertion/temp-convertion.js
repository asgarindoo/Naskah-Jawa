function convertTemperature() {
  // Get user input
  let temperatureInput = document.getElementById("temperature").value;
  let conversionType = document.getElementById("conversionType").value;

  // Validate input
  if (!temperatureInput || isNaN(temperatureInput)) {
    displayResult("Please enter a valid temperature.");
    return;
  }

  // Perform conversion
  let temperature = parseFloat(temperatureInput);
  let result;

  if (conversionType === "celsiusToFahrenheit") {
    result = celsiusToFahrenheit(temperature);
  } else {
    result = fahrenheitToCelsius(temperature);
  }

  // Display the result
  displayResult("Result: " + result.toFixed(2) + " degrees");
}

function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
