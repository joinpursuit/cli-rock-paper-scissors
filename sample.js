const readlineSync = require('readline-sync'); //https://www.npmjs.com/package/readline-sync

let answer = readlineSync.question('What is your name? ');
console.log(`Hi ${answer}!`);
