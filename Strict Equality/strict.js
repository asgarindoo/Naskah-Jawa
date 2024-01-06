function compareValuesStrict() {
  let input1Value = document.getElementById("input1").value;
  let input2Value = document.getElementById("input2").value;

  let resultMessage = determineContentStrict(input1Value, input2Value);

  displayResult(resultMessage);
}

function compareValuesLoose() {
  let input1Value = document.getElementById("input1").value;
  let input2Value = document.getElementById("input2").value;

  let resultMessage = determineContentLoose(input1Value, input2Value);

  displayResult(resultMessage);
}

function assignValues() {
  let input1Value = document.getElementById("input1").value;
  let input2Value = document.getElementById("input2").value;

  assignContent(input1Value, input2Value);
}

function determineContentStrict(value1, value2) {
  if (value1 === value2) {
    return "The values are identical (strict equality).";
  } else {
    return "The values are different (strict equality).";
  }
}

function determineContentLoose(value1, value2) {
  if (value1 == value2) {
    return "The values are identical (loose equality).";
  } else {
    return "The values are different (loose equality).";
  }
}

function assignContent(value1, value2) {
  let resultMessage = "Values assigned: ";
  resultMessage += "Value 1 = " + value1 + ", Value 2 = " + value2;

  displayResult(resultMessage);
}

function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}
