let counter = 0;

function increment() {
  counter++;
  displayCounter();
}

function decrement() {
  counter--;
  displayCounter();
}

function reset() {
  counter = 0;
  displayCounter();
}

function displayCounter() {
  let counterDisplay = document.getElementById("counterDisplay");
  counterDisplay.textContent = "Counter: " + counter;
}
