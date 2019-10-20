const readlineSync = require('readline-sync');
const  rps = ["R", "P", "S"];
const getRandomRps = (arr) =>{
    let random =  arr[Math.floor(Math.random()*arr.length)];
    return random;
}



const beginGame = () => {
    let userWin = 0;
    let computerWin = 0;
    while(computerWin <3 && userWin <3){
        let randomRps = getRandomRps(rps)
        const answer = readlineSync.question('Welcome to Rock, Paper and Scissors. The first to get 3 points, wins. Let\'s Play!\nPick one of [R]ock,[P]aper,[S]cissor: ')
        let answerUC = answer.toUpperCase()
        if(answerUC === randomRps) {
            console.log("Its a tie")
        }else if(answerUC === "R"){
            if(randomRps === "P"){
                console.log("Computer wins this round")
                computerWin++;
            }else{
                console.log("User wins this round")
                userWin ++;
            }
        }else if(answerUC === "P" ){
            if(randomRps === "S"){
                console.log("Computer wins this round")
                computerWin ++    
            }else{
                console.log("User wins this round")
                userWin ++
            }
        }else if(answerUC === "S"){
            if(randomRps === "R"){
                console.log("Computer wins this round")
                computerWin ++
            }else{
                console.log("User wins this round")
                userWin ++
            }
        }else{
            console.log("INVALID CHOICE")
        }
        console.log(`User: ${answer} VS. Computer: ${randomRps}`)
        console.log(`User wins: ${userWin}, Computer wins: ${computerWin}`)
        
       

    } 
    if(userWin === 3){
        console.log("Congrats! You Won!")
    }else if(computerWin === 3){
        console.log("You Lose!")
    }
    
}
beginGame()