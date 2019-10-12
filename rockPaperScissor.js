//Brainstorming:
// 1.I need to create a game that plays with the computer.
// 2. It needs to read both low and uppercase.
// 3. It needs to be randomize with the computer answer reads / understand each value.
// 4. if its not one of the values, return invalid
// 5.. Must provide three response tie, win or lost.

// Need use:
//     -Math.floor(Math.random() max - min)
//     --
// const readlineSync = require('readline-sync');
// let answer = readlineSync.question('what do you need rock, paper or scissors?')
// console.log('Hi ${answer}')

//     --
// let str = 'R'
//     --
// let input = [r, R, s, S, p, P]
// let letter = str.toUpperCase();
// --str.toLowerCase();


// what would you do with the input ?
//     check
// if
// its valid or not
// what happen after verifying users input ?
//     read
// if its upperCase or LowerCase sensitive.

// take the input into

// function to compare but before--
// let computer know what p, s, and r. **
//     computer input

// ========

// coding JS
// check
// if a value exist within an array - how to check ?

// for answers that does not read rR, sS, and pP.


const readlineSync = require('readline-sync');

let options = ["r", "s", "p"]

console.log("Welcome to Rock, Paper, Scissors! Let's play!");
let userInput = readlineSync.question("Pick one [R]ock, [P]aper or [S]cissors?: ")

const checkUserInput = (userInput) => {
    userInput = userInput.toLowerCase()
    if (!options.includes(userInput)) {
        return null;
    } else {
        return userInput
    }
}
userInput = checkUserInput(userInput);
console.log(`user:${userInput}`)

const randomAnswer = (compAnswerArr) => {
    let compInput = Math.floor(Math.random() * compAnswerArr.length);
    console.log(`VS computer:${compAnswerArr[compInput]}`)
    return compAnswerArr[compInput]
}

const winnerGameStandard = (answ1, answ2) => {
    let userInput = answ1;
    let compInput = answ2;
    let result = null;

    if (userInput === null) {
        result = "Invalid choice"
    } else if (userInput === compInput) {
        result = "Tie!" // the most basic case must go first
    } else if (userInput === "r" && compInput === "s") {
        result = "Win!"
    } else if (userInput === "p" && compInput === "r") {
        userInput = "Win!"
    } else if (userInput === "s" && compInput === "p") {
        result = "Win!"
    } else {
        result = "You have lost!"
    }
    console.log(result);
}
winnerGameStandard(userInput, randomAnswer(options));