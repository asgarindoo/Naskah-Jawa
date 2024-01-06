// Logical operators example
/*

1. Logical AND (&&):
// Hasilnya true jika kedua kondisi benar
let result1 = true && true;     // true
let result2 = true && false;    // false
let result3 = false && true;    // false
let result4 = false && false;   // false

2. Logical OR (||):
// Hasilnya true jika salah satu kondisi benar
let result5 = true || true;     // true
let result6 = true || false;    // true
let result7 = false || true;    // true
let result8 = false || false;   // false

3. Logical NOT (!):
// Membalik nilai boolean
let result9 = !true;   // false
let result10 = !false;  // true

*/

// Function to check login status based on user role and subscription level
function checkLoginStatus() {
  // Get user-selected role and subscription level
  let selectedLoginStatus = document.getElementById("loginStatus").value;
  let selectedRole = document.getElementById("role").value;
  let selectedSubscription = document.getElementById("subscription").value;

  // User information
  let isUserLoggedIn = selectedLoginStatus === "true";
  let userRole = selectedRole;
  let subscriptionLevel = selectedSubscription;

  // Checking conditions using logical operators
  let resultMessage = determineUserStatus(
    isUserLoggedIn,
    userRole,
    subscriptionLevel
  );

  // Displaying the result to the user
  displayResult(resultMessage);
}

// Function to determine user status based on conditions
function determineUserStatus(isLoggedIn, role, subscription) {
  if (isLoggedIn && role === "admin") {
    return "Welcome! You have access to premium features as an admin.";
  } else if (isLoggedIn && role === "user" && subscription === "premium") {
    return "Welcome! You have access to premium features as a user.";
  } else if (isLoggedIn && role === "user" && subscription === "free") {
    return "Welcome! You have limited access as a free user.";
  } else if (!isLoggedIn) {
    return "Please log in to access the content.";
  } else {
    // Default condition for any other case
    return "Sorry, you don't have sufficient privileges for this content.";
  }
}

// Function to display the result to the user
function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}
