const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const scoreDisplay = document.querySelector("#score");
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
let width = 15;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;

function createGrid() {
    
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement("div");
        if (i % 2 === 0) {
            square.classList.add("square-light")
        } else {
            square.classList.add("square-dark")
        }
        grid.appendChild(square);
        squares.push(square);
    };
};

createGrid();

currentSnake.forEach(index => squares[index].classList.add("snake"));

function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove("snake"));    
    squares[appleIndex].classList.remove("apple");
    clearInterval(timerId)
    currentSnake = [2,1,0];
    direction = 1;
    score = 0;
    scoreDisplay.textContent = score
    intervalTime = 500;
    generateApples();
    currentSnake.forEach(index => squares[index].classList.add("snake"));
    timerId = setInterval(move, intervalTime);
};

function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width ) ||
        (currentSnake[0] % width === width-1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        (squares[currentSnake[0] + direction].classList.contains("snake"))   
        )
    return clearInterval(timerId);

    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
    squares[currentSnake[0]].classList.add("snake");

    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[appleIndex].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail)
        generateApples();
        score++;
        scoreDisplay.textContent = score; 
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime);
    };
};

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple");
}
generateApples();

function control(event) {
    if (event.key === "ArrowUp") {
        console.log("up");
        direction = -width;

    } else if (event.key === "ArrowRight") {
        console.log("right");
        direction = 1;

    } else if (event.key === "ArrowLeft") {
        console.log("left");
        direction = -1;

    } else if (event.key === "ArrowDown") {
        console.log("down");
        direction = width;
    }
}

document.addEventListener("keydown",control);
startBtn.addEventListener("click", startGame)
// 39 right arrow
// 38 up arrow
// 37 left arrow
// 40 down arrow