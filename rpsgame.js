const readlineSync = require('readline-sync'); 
let  rps = ["R", "P", "S"]

const getRandomRps = (arr) =>{
    let random =  arr[Math.floor(Math.random()*arr.length)]
    return random
}


const beginGame = () => {
    let randomRps = getRandomRps(rps)
        console.log(randomRps)
        const answer = readlineSync.question('Pick one of [R]ock,[P]aper,[S]cissor: ') 
        const answerUC = answer.toUpperCase()
        // if(!rps.includes(answerUC)){
        //     console.log("Invalid choice")
        if( answerUC ===  randomRps) {
            console.log("TIE")
            beginGame()
        }else if(answerUC === "R"){
            if(randomRps === "P"){
                console.log("COMPUTER WINS")
            }else{
                console.log("USER WINS")
            }
        }else if(answerUC === "P" ){
            if(randomRps === "S"){
                console.log("COMPUTER WINS")
            }else{
                console.log("USER WINS")
            }
        }else if(answerUC === "S"){
            if(randomRps === "R"){
                console.log("COMPUTER WINS")
            }else{
                console.log("USER WINS")
            }
        }else{
            console.log("Invalid choice")
        }
}
beginGame()