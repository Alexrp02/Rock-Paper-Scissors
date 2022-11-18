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

let wins = 0;
let machineWins = 0 ;

function round (playerSelection, computerSelection) {
    console.log("Computer says: " + computerSelection);
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return('Draw!');
    }else if(playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase() == 'paper') {
            machineWins+=1;
            return('You lost! Paper beats Rock')
        }else{
            wins+=1;
            return('You won! Rock beats Scissors')
        }
    }else if(playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase() == 'scissors') {
            machineWins+=1;
            return('You lost! Scissors wins Paper')
        }else{
            wins+=1;
            return('You won! Paper wins Rock')
        }
    }else {
        if (computerSelection.toLowerCase() == 'rock') {
            machineWins+=1;
            return('You lost! Rock beats Scissors')
        }else{
            wins+=1;
            return('You won! Scissors win Paper')
        }
    }
}

function game() {
    const rounds = parseInt(prompt('Enter how many rounds do you want to play: ')) ;
    let playerSelection;
    for(let i=0 ; i<rounds ; i++) {
        playerSelection = prompt('Enter paper, rock or scissors: ')
        alert(round(playerSelection, getComputerChoice()))
    }

    alert('Machine won ' + machineWins + ' and you ' + wins) ;

    if (wins > machineWins){
        alert('You won the game!!');
    }else if (wins < machineWins){
        alert('You lost again the machine!!');
    }else {
        alert('You and the machine draw!!');
    }
}

// game() ;