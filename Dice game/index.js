let playerOne = 0;
let playerTwo = 0;
let playerOneTurn = true;

const scoreOne = document.getElementById("player1Scoreboard"),
scoreTwo = document.getElementById("player2Scoreboard"),
diceOne = document.getElementById("player1Dice"),
diceTwo = document.getElementById("player2Dice"),
message = document.getElementById("message"),
resetBtn = document.getElementById("resetBtn"),
rollBtn = document.getElementById("rollBtn");

function replace () {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (playerOneTurn) {
        diceOne.textContent = randomNumber;
        diceTwo.classList.add("active");
        diceOne.classList.remove("active");
        message.textContent = "Player 1 Turn"
        playerOne += randomNumber;
        scoreOne.textContent = playerOne;
    } else {
        diceTwo.textContent = randomNumber;
        diceOne.classList.add("active");
        diceTwo.classList.remove("active");
        message.textContent = "Player 2 Turn"
        scoreTwo.textContent = randomNumber;
        playerTwo += randomNumber;
        scoreTwo.textContent = playerTwo
    }

    if (playerOne >= 20) {
        message.textContent = "Player 1 has won!"
        replace();
    } else if (playerTwo >= 20) {
        message.textContent = "Player 2 has won!"
        replace();
    }


    playerOneTurn = !playerOneTurn;
})

function reset() {
    playerOne = 0;
    playerTwo = 0;
    message.textContent = "Player 1 Turn"
    diceOne.classList.add("active");
    diceTwo.classList.remove("active");
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    diceOne.textContent = "-"
    diceTwo.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    playerOneTurn = true;
}

resetBtn.addEventListener("click",() => {
    reset();
})