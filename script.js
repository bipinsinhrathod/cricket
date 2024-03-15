
function generateComputerChoice (){
    
    
    let randomNumber = Math.random() * 3 ;

    if (randomNumber > 0 && randomNumber <= 1){
        return 'Bat';
    }else if (randomNumber <= 2 && randomNumber > 1){
        return 'Ball';
    }else {
        return 'Stump';
    }
 }


function getResult(userMove,computerMove){
    
    if(userMove === "Bat"){
       if(computerMove === "Ball"){
        return "Wow , You won the game.."
       } else if(computerMove === "Bat"){
        return "Game is tie.."
       } else if (computerMove === "Stump") {
        return "Opps , You lose the game.."
       }
    }else if (userMove === "Ball"){
        if(computerMove === "Bat"){
            return "Opps , You lose the game.."
        } else if(computerMove === "Ball"){
            return "Game is tie.."
        } else if(computerMove === "Stump"){
            return "Wow , You won the game.."
        }
    }else {
        if(computerMove === "Ball"){
            return "Opps , You lose the game.."
        } else if (computerMove === "Bat"){
            return "Wow , You won the game.."
        } else if(computerMove === "Stump"){
            return "Game is tie.."
        }
    }

}

function showResult(userMove , computerMove , result) {
        alert (`You have you chosen ${userMove}.. Computer choice is ${computerMove}.. and ${result}`)
    }