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

const machineChose = document.querySelector('.machine-chose') ;
const yours = document.querySelector('.yours') ;
const machine = document.querySelector('.machine') ;
const result = document.querySelector('.result') ;
const message = document.querySelector('.message') ;

function round (playerSelection, computerSelection) {
    console.log("Computer says: " + computerSelection);
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        message.setAttribute('style', 'color:gray;') 
        return('Draw!');
    }else if(playerSelection.toLowerCase()=="rock"){
        if (computerSelection.toLowerCase() == 'paper') {
            machineWins+=1;
            message.setAttribute('style', 'color:red;') ;
            return('You lost! Paper beats Rock')
        }else{
            message.setAttribute('style', 'color:green;') 
            wins+=1;
            return('You won! Rock beats Scissors')
        }
    }else if(playerSelection.toLowerCase()=="paper"){
        if (computerSelection.toLowerCase() == 'scissors') {
            machineWins+=1;
            message.setAttribute('style', 'color:red;') ;
            return('You lost! Scissors wins Paper')
        }else{
            message.setAttribute('style', 'color:green;') ;
            wins+=1;
            return('You won! Paper wins Rock')
        }
    }else {
        if (computerSelection.toLowerCase() == 'rock') {
            machineWins+=1;
            message.setAttribute('style', 'color:red;') ;
            return('You lost! Rock beats Scissors')
        }else{
            message.setAttribute('style', 'color:green;') 
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

const buttons = document.querySelectorAll('.button') ;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        machineChose.classList.remove("animation") ;
        let computerChoice = getComputerChoice() ;
        message.innerHTML = round(button.innerHTML, computerChoice) ;

        machineChose.innerHTML = "The machine chose: " + computerChoice ;
        yours.innerHTML = "Your puntuation: ".concat(wins) ;
        machine.innerHTML = "Machine's puntuation: " + machineWins ;

        if(machineWins == 5) {
            button.classList.remove('zoom') ;
            result.setAttribute('style', 'color: red;')
            result.innerHTML = 'MACHINE WINS...' ;
            result.classList.remove('hidden') ;
        }
        if(wins == 5) {
            button.classList.remove('zoom') ;
            result.innerHTML = 'YOU WIN!!' ;
            result.classList.remove('hidden') ;
        }
    })
})

 
// game() ;