//computerChoice
function getComputerChoice(){
 const randomNumber= Math.random();
 if(randomNumber<=0.33){
    return "Rock";
 }else if(randomNumber>=0.33 && randomNumber<=0.66){
    return "Paper"
 }else{
    return "Scissors";
 }
}
let computerChoice= getComputerChoice();
console.log(computerChoice);

//humanChoice
function getHumanChoice(){
 let humanInput= prompt("please enter your choice","");
 return humanInput.toLowerCase(); 
}
let humanChoice= getHumanChoice();
console.log(humanChoice)