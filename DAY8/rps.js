function game(){
    let playerWin = 0;      //initializing player win score.
    let computerWin = 0;    //initializing computer win score.
    for(i=1;i<=5;i++){      // the game will loop for five times.
        const choices = ["rock","paper","scissor"]; //array for the choices of computer
        
        //function that generates random selection 
        function getComputerSelection(choices){
            return choices[Math.floor(Math.random()*choices.length)]; //using math.floor to generate lower number than length of array and math.random selects the random number between them.
        }
        let computerSelection = getComputerSelection(choices);  
        
        let userChoice = prompt('Choose your warrior(Rock/Paper/Scissor):', ''); //prompts the user to select a choice.
        
        function userSelection(){           //the selection should be case insensitive so this function lowercases the choice.
            return userChoice.toLowerCase();
        }
        let playerSelection = userSelection(); 
        function playRound(playerSelection , computerSelection){  //function that counts the win and shows the result of a single session.
            if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock' )||(playerSelection == 'scissor' && computerSelection == 'paper')){
                playerWin += 1;
                round = "Player wins!!"+" "+ playerSelection +" "+ "beats" +" "+ computerSelection + "\nPlayer:" + playerWin + "\nComputer:" + computerWin;;
            }
            else if((computerSelection == 'rock' && playerSelection == 'scissor')|| (computerSelection == 'paper' && playerSelection == 'rock') ||(computerSelection == 'scissor' && computerSelection == 'paper')){
                computerWin += 1;
                round = "Computer wins!!"+" "+ computerSelection +" "+"beats"+" "+playerSelection + "\nPlayer:" + playerWin + "\nComputer:" + computerWin;
            }
            else{
                round = "Tie!! You both choose"+" "+ playerSelection + "\nPlayer:" + playerWin + "\nComputer:" + computerWin;
            }
            return round;
        }
        console.log(playRound(playerSelection, computerSelection)); //shows result;
    }
    function finalResult(playerWin, computerWin){   //function that shows the final result
        if(playerWin > computerWin){
            result = "Player wins by" +" "+(playerWin - computerWin);
        }
        else if(computerWin > playerWin){
            result = "Computer wins by" +" "+(computerWin - playerWin);
        }
        else{
            result = "It's a tie!! Both scored" +" "+ playerWin;
        }
        return result;
    }
    console.log(finalResult(playerWin, computerWin));
}
game();



