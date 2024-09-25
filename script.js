let randomNum = Math.floor(Math.random() * 100) + 1;
let numAttempts = 0;

function guessbutton() {
    let userGuessNum = document.getElementById('inputGuess').value;
    let messageToUser = document.getElementById('message');
    numAttempts++;

    if(userGuessNum === randomNum){
        messageToUser.textContent = `Congratulations You Guessed The Number ${guessbutton} Correctly in ${numAttempts}`;
        messageToUser.style.color = "green";
    }
    else if(userGuessNum > randomNum){
        messageToUser.textContent = `Too High Try Again!`
        messageToUser.style.color = "red";
    }
    else if(userGuessNum < randomNum){
        messageToUser.textContent = `Too Low Try Again!`
        messageToUser.style.color = "red";
    }

    document.getElementById('attempts').textContent = `Attempts: ${numAttempts}`;
}

function restartbutton(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    numAttempts = 0;
    document.getElementById('inputGuess').value = "";
    messageToUser = document.getElementById('message').textContent = "";
    document.getElementById('attempts').textContent = `Attempts: 0`;
}