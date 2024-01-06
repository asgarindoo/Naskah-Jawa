// Function to check the day of the week
function checkDay() {
  // Accessing the input element
  let dayInput = document.getElementById("dayInput").value;

  // Using switch statement to determine the day
  let day;
  switch (parseInt(dayInput)) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Invalid day";
  }

  // Displaying the result message
  document.getElementById("resultMessage").textContent = "The day is: " + day;
}
