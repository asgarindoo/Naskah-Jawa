function generateRandomPIN() {
    let randomPIN = getRandomInt(1000, 9999);
    displayPIN(randomPIN);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayPIN(pin) {
    let pinDisplay = document.getElementById('pinDisplay');
    pinDisplay.textContent = 'Generated PIN: ' + pin;
}
