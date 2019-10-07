## Command Line Rock Paper Scissors.

For this assignment, you will build a [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) game in the terminal.

![rock-paper-scissors](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/800px-Rock-paper-scissors.svg.png)

## Instructions for lab submission

1. Fork the assignment repo
1. Clone your Fork to your machine
2. Complete the lab
3. Push your changes to your Fork
4. Notify instructors by Slack or email once you're done.

## Requirements

1. The user must be able to play against the computer
2. The user must be given the option to pick from rock, paper or scissors
3. The computer must chose randomly between rock, paper, scissors.
4. Once both the computer and the user have chosen, the game should tell who won.
5. Handle user entering 'r' or 'R' as `Rock`. Same for the rest.
6. If user enters a letter that is none of `r`, `R`, `s`, `S`, `p` or `P`. Display a message `Invalid choice` and quit the game.

## Notes

* Use the [`readline-sync`](https://www.npmjs.com/package/readline-sync) module to receive input from the user.
* A sample of how to use `readline-sync` is in the file [`sample.js`](./sample.js) in this repo. Check it out.
* The `readline-sync` module has already been installed and its inside the `node_modules` folder. The only thing you need to do with it is learn how to use it. Read the docs.

## Demo
![command line rock paper scissors game](/assets/rps-cli.gif)

## Rubric
![command line rock paper scissors game grading rubric](/assets/rps-cli-rubric.png)
