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

// global scores
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
//human Input
function getHumanChoice(){
  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");
  const announce= document.querySelector(".announce");

  btnRock.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    console.log(result);
    announce.textContent= `${result} | human score:${humanScore} - computer score:${computerScore}`;
  });

  btnPaper.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    console.log(result);
    announce.textContent= `${result} | human score:${humanScore} - computer score:${computerScore}`;
  });

  btnScissors.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    console.log(result);
    announce.textContent= `${result} | human score:${humanScore} - computer score:${computerScore}`;
  });
}


// start game — just set up listeners once
function playGame() {
  getHumanChoice();
}

// run game
playGame();