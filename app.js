const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    } 
    else if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    else {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "win"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "win"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "win"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "lose"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "lose"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "lose"
    }

    resultDisplay.innerHTML = result
}