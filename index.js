
const words = ['Rock','Paper','Scissors',];
function getComputerChoice(){
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    return randomWord;
}
let myScore = 0;
let pcScore = 0;

function gamePlay(computerChoice, userInput) {

    if (computerChoice === "Rock" && userInput === "rock"){
        return console.log("It's a draw");
    }
    else if (computerChoice === "Rock" && userInput === "paper"){
        myScore += 1;
        console.log("It's a win");
        return  console.log("Your score is: "+ myScore);
    }
    else if(computerChoice === "Rock" && userInput === "scissors"){
        pcScore += 1;
        console.log("It's a loss");
        return console.log("Pc score is: "+ pcScore);
    }
    else if (computerChoice === "Paper" && userInput === "rock"){
        pcScore += 1;
        console.log("It's a loss");
        return console.log("Pc score is: "+ pcScore);
    }
    else if (computerChoice === "Paper" && userInput === "paper"){
        return console.log("It's a draw");
    }
    else if (computerChoice === "Paper" && userInput === "scissors"){
        myScore += 1;
        console.log("It's a win");
        return console.log("Your score is: "+ myScore);
    }
    else if (computerChoice === "Scissors" && userInput === "rock"){
        myScore += 1;
        console.log("It's a win");
        return console.log("Your score is: "+ myScore);

    }
    else if (computerChoice === "Scissors" && userInput === "paper"){
        pcScore += 1;
        console.log("It's a loss");
        return console.log("Pc score is: "+ pcScore);
    }
    else if (computerChoice === "Scissors" && userInput === "scissors"){
        return console.log("It's a draw");
    }
    else{
        return console.log("Bad input");
    }

}

function game(){
    for (let i = 0; i <= 4; i++){
        computerChoice = getComputerChoice()
        playerInput = prompt('Please enter Rock or Paper or Scissors');
        console.log(computerChoice);
        inputLowerCase = playerInput.toLowerCase();
        gamePlay(computerChoice, inputLowerCase);
    }
    if (myScore >pcScore){
        console.log("You won the game");
    }
    else {
        console.log("You lost the game");
    }
}

game();