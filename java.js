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
let round=0;

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
  
  function handleClick(choice){
    if(round>=5) return;
    round++;
    const result = playRound(choice,getComputerChoice());
    announce.textContent = `Round ${round}: ${result} | Human: ${humanScore} - Computer: ${computerScore}`;
    //final winner
    if(round==5){
     if(humanScore>computerScore){
        announce.textContent=`congratulation, you won |you: ${humanScore} - computer: ${computerScore}`;
     }else if(computerScore>humanScore){
        announce.textContent= `computer won| you: ${humanScore} - computer: ${computerScore} `;
     }else{
        announce.textContent=`It is a tie | you: ${humanScore} - computer: ${computerScore}`;
     }
    }
  }
  btnRock.addEventListener("click", () => handleClick("rock"));
    btnPaper.addEventListener("click", () => handleClick("paper"));
    btnScissors.addEventListener("click", () => handleClick("scissors"));
}


// start game — just set up listeners once
function playGame() {
  getHumanChoice();
}

// run game
playGame();