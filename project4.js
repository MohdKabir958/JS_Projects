let randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('.guessField')
let guessList = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startover = document.querySelector('.resultParas')
let warning = document.querySelector('.warnings')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)

    }, false)
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        warning.innerHTML = "Please enter a valid number "
        warning.style.color = "red"
        // warning.style.fontSize="1.5em"
    }
    else if(guess < 1){
        warning.innerHTML = "Please enter a valid number "
    }
    else if(guess > 100){
        warning.innerHTML = "Please enter a valid number "
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over The last Random Number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // message print for low and high
    if (guess == randomNum) {
        displayMessage(`You guess right !`);
    }
    else if (guess < randomNum) {
        displayMessage(`your Number is TOO Low`);
    }
    else if (guess > randomNum) {
        displayMessage(`your Number is TOO High`)
    }
}

function displayGuess(guess) { //cleanupguess()
    userInput = "";
    guessList.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    //dom manipulation
    warning.innerHTML=`${message}`
}

function endGame() {

}

function newGame() {

}
