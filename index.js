// number cuessing game

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('result').textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        document.getElementById('result').textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'block';
        document.getElementById('submit').disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = "Too low! Try again.";
    } else {
        document.getElementById('result').textContent = "Too high! Try again.";
    }
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('submit').disabled = false;
    document.getElementById('restart').style.display = 'none';
});