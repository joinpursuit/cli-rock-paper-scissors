

const readlineSync = require('readline-sync');

const  rps = ["R", "P", "S"];


const getRandomRps = (arr) =>{
    let random =  arr[Math.floor(Math.random()*arr.length)];
    return random;
}

const userWinner = (answerUC, randomRps) =>{
    if(answerUC === "R" && randomRps === "S"){
        return " ===> User wins this round"
    }else if(answerUC === "P" && randomRps === "R"){
        return " ===> User wins this round"
    }else if(answerUC === "S" && randomRps === "P"){
        return " ===> User wins this round"
    }
}


const computerWinner = (answerUC, randomRps) =>{
    if(answerUC === "R" && randomRps === "P"){
        return " ===> Computer wins this round"
    }else if(answerUC === "P" && RandomRps === "S" ){
        return " ===> Computer wins this round"
    }else if(answerUC === "S" && randomRps === "R"){
        return " ===> Computer wins this round"  
    }
}

const winner = (userWin,computerWin) =>{
    if(userWin === 3){
        return "Congrats! You Won!"
    }else if(computerWin === 3){
        return "You Lose!"
    }
}

const beginGame = () => {
    let userWin = 0;
    let computerWin = 0;
    let chances = 3;
    while(computerWin < `${chances}` && userWin <`${chances}`){
        let randomRps = getRandomRps(rps)
        const answer = readlineSync.question(`Welcome to Rock, Paper and Scissors. The first to get ${chances} points, wins. Let\'s Play!\nPick one of [R]ock,[P]aper,[S]cissor: `)
        let answerUC = answer.toUpperCase()
        if(answerUC === randomRps) {
            console.log("Its a tie")
        }else if(computerWinner(answerUC, randomRps)){
            console.log(computerWinner(answerUC, randomRps))
            
            computerWin++
        }else if(userWinner(answerUC, randomRps)){
            console.log(userWinner(answerUC, randomRps))
            userWin++
        }else{
            console.log("===> INVALID CHOICE")
        }
        console.log(`User: ${answer} VS. Computer: ${randomRps}`)
        console.log(`User wins: ${userWin}, Computer wins: ${computerWin}`)
    } 
   let result = winner(userWin,computerWin)
   console.log(result)
    
}
beginGame()