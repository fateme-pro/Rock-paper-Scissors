// computer input
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//const computerSelection = getComputerChoice();
//console.log("Computer chose:", computerSelection);

// human input
function getHumanChoice() {
  const humanInput = prompt("Please enter your choice (rock, paper, or scissors):", "");
  return humanInput.toLowerCase();
}

//const humanSelection = getHumanChoice();
//console.log("You chose:", humanSelection);





//const result = playRound(humanSelection, computerSelection);
//console.log(result);
//console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It is a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
    humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}`;
    }
    }
    for(let round=1; round<=5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}\n`);
    }
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final score: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${humanScore} - ${computerScore}`);
    }
}
playGame();