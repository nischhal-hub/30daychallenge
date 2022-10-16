//storing choices for computer in a array.
const choices = ["rock","paper","scissor"];
//function that generates random selection 
function getComputerSelection(choices){
    return choices[Math.floor(Math.random()*choices.length)]; //using math.floor to generate lower number than length of array and math.random selects the random number between them.
}
let computerSelection = getComputerSelection(choices);
//console.log(computerSelection);

//player selection
let userChoice = prompt('Choose your warrior(Rock/Paper/Scissor):', '');
//the selection should be case insensitive so this function lowercases the choice.
function userSelection(){
    return userChoice.toLowerCase();
}
let playerSelection = userSelection(); //assigning the return value of userSelection to playerSelection
//console.log(playerSelection);

//function to check the result.
function playRound(playerSelection , computerSelection){
    if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock' )||(playerSelection == 'scissor' && computerSelection == 'paper')){
         round = "Player wins!!\t" + playerSelection + "\tbeats\t" + computerSelection;
    }
    else if((computerSelection == 'rock' && playerSelection == 'scissor')|| (computerSelection == 'paper' && playerSelection == 'rock') ||(computerSelection == 'scissor' && computerSelection == 'paper')){
         round = "Computer wins!!\t"+ computerSelection + "\tbeats\t" + playerSelection;
    }
    else{
         round = "Tie!! You both choose\t" + playerSelection;
    }
    return round;
}

console.log(playRound(playerSelection, computerSelection)); //shows result;