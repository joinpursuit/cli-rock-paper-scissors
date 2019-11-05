// Initializing  the readline sync into the program 
const readlineSync = require('readline-sync');

//First declare options arrays
const options = ["r", "s", "p"]

//randomize computer input 
const getComputerAnswer = (options) => {
    let compInput = Math.floor(Math.random() * options.length);
    return options[compInput]
}


const askQuestion = () => {
    return readlineSync.question("Pick one [R]ock, [P]aper or [S]cissors?: ")
}

//checking if userInput input is an acceptable response
const checkUserInput = (userInput) => {
    return !options.includes(userInput)
}

// comparing user input with the computer input
const evaluateWinner = (userInput, compInput) => {

    let result = ""
    if (userInput === compInput) {
        result = "Tie!"
    } else if (userInput === "r" && compInput === "s") {
        result = "User wins!"
    } else if (userInput === "p" && compInput === "r") {
        result = "User wins!"
    } else if (userInput === "s" && compInput === "p") {
        result = "User wins!"
    } else {
        result = "You have lost!"
    }
    console.log(`User: ${userInput} vs computer: ${compInput}`)
    console.log(result);
}

let compAnswer = getComputerAnswer(options)
let isInvalid = true;

// the engine of the function 
console.log("Welcome to Rock, Paper, Scissors! Let's play!");
while (isInvalid) { // meaning  the user input is valid.
    let userInput = askQuestion().toLowerCase();
    if (checkUserInput(userInput)) {
        console.log(`Your input ${userInput} is an invalid choice, please try again!`);
    } else {
        isInvalid = false
        evaluateWinner(userInput, compAnswer);
    }
}



//============================================================================
//Brainstorming:
// 1.I need to create a game that plays with the computer.
// 2. It needs to read both low and uppercase.
// 3. It needs to be randomize with the computer answer reads / understand each value.
// 4. If its not one of the values, return invalid and end game.
// 5. Must provide three response tie, win or lost.

//Need use:
//the .include method
//Math.floor(Math.random() max - min)
//     --
// const readlineSync = require('readline-sync');
// let answer = readlineSync.question('what do you need rock, paper or scissors?')
// console.log(`${answer}`)
// --userInput.toLowerCase();

//Questions by JR/Alejo:
// What would you do with the input ?
// A:Check that input equals to only r,R,s,S,p,P. It cannot read other letters, numbers and symbols. I must compare user
// input with the computer random input.
// What happens after verifying users input?  
// A: If input its one of the good choice, it needs to check for upperCase/lowerCase sensitive and  compare input with computer.
// It needs to meet the condition statements.
// How do you check if a value exist within an array? 
// if a value exist within an array - how to check ?

/* ===Questions=== 
--How can I improve my code?
--What are some suggestions for the if and else statements?/
--Do you think the switch case would have served me better?


//====================================================