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

const computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);

// human input
function getHumanChoice() {
  const humanInput = prompt("Please enter your choice (rock, paper, or scissors):", "");
  return humanInput.toLowerCase();
}

const humanSelection = getHumanChoice();
console.log("You chose:", humanSelection);

// scores
let computerScore = 0;
let humanScore = 0;

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


const result = playRound(humanSelection, computerSelection);
console.log(result);
console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
