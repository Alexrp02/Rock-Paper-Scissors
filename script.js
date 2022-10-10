function getComputerChoice () {
    let number = Math.floor(Math.random()*3);
    switch (number) {
        case 0 :
            return("Rock");
        case 1 :
            return("Paper");
        case 2 :
            return("Scissors");
    }
}

function round (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return('Draw!');
    }else if(playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase() == 'paper') {
            return('You lost! Paper beats Rock')
        }else{
            return('You won! Rock beats Scissors')
        }
    }else if(playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase() == 'scissors') {
            return('You lost! Scissors wins Paper')
        }else{
            return('You won! Paper wins Rock')
        }
    }else {
        if (computerSelection.toLowerCase() == 'rock') {
            return('You lost! Rock beats Scissors')
        }else{
            return('You won! Scissors win Paper')
        }
    }
}

const playerSelection = 'Scissors' ;
const machineSelection = getComputerChoice() ;

console.log('Player says ' + playerSelection)
console.log("Computer says: " + machineSelection);
console.log(round(playerSelection, machineSelection)) ;