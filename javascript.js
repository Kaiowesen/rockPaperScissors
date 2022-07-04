


    
  
    
    
   
   



//Make array of three strings 
const myArray = [ "rock",  "paper", "scissors"];
 
function playGame () {
    playRound();
    checkResult();
}

function playerChoice () {
    let input = prompt ("Let/'s play! Choose rock, paper or scissors");
    input = input.toLowerCase();
    return input
}


function computerChoice () {
   
    return myArray[Math.floor(Math.random() * myArray.length)];
}


function playRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   return (playerSelection, computerSelection);
}

function checkResult (playerSelection,computerSelection) {
    if  (playerSelection != rock || paper || scissors) {
        return ("Please choose rock paper or scissors");
    }
    else if (playerSelection === computerSelection) {
        return ("it/'s a draw!");
    }
    else if (playerSelection === computerSelection) {
        return ("It/'s a draw!");
    }
    else if  (playerSelection === rock && computerSelection === scissors) {  
        return ("rock beats scissors, Player wins!");
    }
    else if  (playerSelection === rock && computerSelection === paper) {
        return ("paper beats rock. Computer wins!");
    }
    else if (playerSelection === scissors && computerSelection === rock){
        return ("rock beats scissors, computer wins!");
    }
    else if (playerSelection === scissors && computerSelection === paper) {
        return ("scissors beats paper. Player wins!");
    }
    else if (playerSelection === paper && computerSelection === rock) {
        return ("paper beats rock. Player wins!");
    }
    else if (playerSelection === paper && computerSelection === scissors) {
        return ("scissors beats paper. Player wins!");
    }
    else {
    return ("something went wrong, please play again");
    }
}
playGame();