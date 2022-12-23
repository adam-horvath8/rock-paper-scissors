
const words = ["Rock", "Paper", "Scissors"];
let myScore = 0;
let pcScore = 0;
while (true){
    let playerChoice = prompt('Please enter Rock or Paper or Scissors if you want to stop press 0');
    if (playerChoice === "0") {break}; 
    inputLowerCase = playerChoice.toLowerCase();

    let randomIndex = Math.floor(Math.random() * words.length);
    let pcChoice = words[randomIndex];
    console.log(pcChoice);

    if (pcChoice === "Rock" && inputLowerCase === "rock"){
        console.log("It's a draw");
    }
    else if (pcChoice === "Rock" && inputLowerCase === "paper"){
        myScore += 1;
        console.log("It's a win");
        console.log("Your score is: "+ myScore);
    }
    else if(pcChoice === "Rock" && inputLowerCase === "scissors"){
        pcScore += 1;
        console.log("It's a loss");
        console.log("Pc score is: "+ pcScore);
    }
    else if (pcChoice === "Paper" && inputLowerCase === "rock"){
        pcScore += 1;
        console.log("It's a loss");
        console.log("Pc score is: "+ pcScore);
    }
    else if (pcChoice === "Paper" && inputLowerCase === "paper"){
        console.log("It's a draw");
    }
    else if (pcChoice === "Paper" && inputLowerCase === "scissors"){
        myScore += 1;
        console.log("It's a win");
        console.log("Your score is: "+ myScore);
    }
    else if (pcChoice === "Scissors" && inputLowerCase === "rock"){
        myScore += 1;
        console.log("It's a win");
        console.log("Your score is: "+ myScore);

    }
    else if (pcChoice === "Scissors" && inputLowerCase === "paper"){
        pcScore += 1;
        console.log("It's a loss");
        console.log("Pc score is: "+ pcScore);
    }
    else if (pcChoice === "Scissors" && inputLowerCase === "scissors"){
        console.log("It's a draw");
    }
    else{
        console.log("Bad input");  
    }

    
}
if (myScore >pcScore){
        console.log("You won the game");
    }
    else {
        console.log("You lost the game");
    }