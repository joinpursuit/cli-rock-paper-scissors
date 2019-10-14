const readlineSync = require('readline-sync'); //https://www.npmjs.com/package/readline-sync

let  rps = ["R", "P", "S"]

function getRandomRps(arr){
let random =  arr[Math.floor(Math.random()*arr.length)]
// console.log(random)
return random
}
// getRandomRps(rps)



const beginGame = () => {
    let randomRps = getRandomRps(rps)
    
    console.log(randomRps)
    const answer = readlineSync.question('Pick one of [R]ock,[P]aper,[S]cissor: ') 
    const answerUC = answer.toUpperCase()

    // for(let i=0;i<1;i++){
        if(!rps.includes(answerUC)){
        console.log("Invalid choice")
 
        }
    // }

   else if( answerUC ===  randomRps) {
        console.log("TIE")
        beginGame()
   
   
} else if(answerUC === "R" && randomRps === "P"){
        console.log("COMPUTER WINS")
    }else if(answerUC === "R" && randomRps === "S"){
        console.log("USER WINS")
    }else if(answerUC === "P" &&randomRps === "S" ){
        console.log("COMPUTER WINS")
    }else if(answerUC === "P" &&randomRps === "R" ){
        console.log("USER WINS")
    }else if(answerUC === "S" &&randomRps === "R" ){
        console.log("COMPUTER WINS")
    }else if(answerUC === "S" &&randomRps === "P" ){
        console.log("USER WINS")
    }
    
}
beginGame()