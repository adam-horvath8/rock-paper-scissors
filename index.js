
const words = ['Rock','Paper','Scissors',];
function getComputerChoice(){
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    return randomWord;
}
computerChoice = getComputerChoice()
console.log(computerChoice);

playerInput = prompt('Please enter Rock or Paper or Scissors');
inputLowerCase = playerInput.toLowerCase();

function gamePlay(computerChoice, userInput) {

    if (computerChoice === "Rock" && userInput === "rock"){
        return console.log("It's a draw");
    }
    else if (computerChoice === "Rock" && userInput === "paper"){
        return console.log("It's a win");
    }
    else if(computerChoice === "Rock" && userInput === "scissors"){
        return console.log("It's a loss");
    }
    else if (computerChoice === "Paper" && userInput === "rock"){
        return console.log("It's a loss");
    }
    else if (computerChoice === "Paper" && userInput === "paper"){
        return console.log("It's a draw");
    }
    else if (computerChoice === "Paper" && userInput === "scissors"){
        return console.log("It's a win");
    }
    else if (computerChoice === "Scissors" && userInput === "rock"){
        return console.log("It's a win");
    }
    else if (computerChoice === "Scissors" && userInput === "paper"){
        return console.log("It's a loss");
    }
    else if (computerChoice === "Scissors" && userInput === "scissors"){
        return console.log("It's a draw");
    }
    else{
        return console.log("Bad input");
    }

}
gamePlay(computerChoice, inputLowerCase);