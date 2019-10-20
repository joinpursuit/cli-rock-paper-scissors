const readlineSync = require('readline-sync');
const  rps = ["R", "P", "S"];
const getRandomRps = (arr) =>{
    let random =  arr[Math.floor(Math.random()*arr.length)];
    return random;
}

const beginGame = () => {
    let userWin = 0;
    let computerWin = 0;
    while(computerWin <4 && userWin <4){
        let randomRps = getRandomRps(rps)
        console.log(randomRps)
        console.log(`user wins: ${userWin}`)
        console.log(`computer wins: ${computerWin}`)
        const answerUC = readlineSync.question('Pick one of [R]ock,[P]aper,[S]cissor: ')
        if(answerUC === randomRps) {
            console.log("Its a tie")
        }else if(answerUC === "R"){
            if(randomRps === "P"){
                console.log("COMPUTER WINS")
                computerWin++;
            }else{
                console.log("USER WINS")
                userWin ++;
            }
        }else if(answerUC === "P" ){
            if(randomRps === "S"){
                console.log("COMPUTER WINS")
                computerWin ++
                
            }else{
                console.log("USER WINS")
                userWin ++
            }
        }else if(answerUC === "S"){
            if(randomRps === "R"){
                console.log("COMPUTER WINS")
                computerWin ++
            }else{
                console.log("USER WINS")
                userWin ++
            }
        }else{
            console.log("Invalid choice")
        }
    } 
}
beginGame()