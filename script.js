let computerChoice;

function generateComputerChoice (){

    let randomNumber = Math.random() * 3 ;

    if (randomNumber > 0 && randomNumber <= 1){
        computerChoice = 'Bat';
    }else if (randomNumber <= 2 && randomNumber > 1){
        computerChoice = 'Ball';
    }else {
        computerChoice = 'Stump';
    }
}