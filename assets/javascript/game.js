//onkeyup (or down) generate random char (Math.random()), will need to set an array of the alphabet
//if userGuess === computerGuesses wins increases by 1, then guessesLeft reset to 9
//else guessesLeft decreases by 1, user guess is displayed next to guessesSoFar
//if random char != keyPressed after 9 times losses increase by 1
//need to set up vars for total wins, losses, guesses left, and guesses so far
//also need to set up var for computer choices and for userGuess
//need to push userGuess into guessesSoFar

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

document.onkeydown = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    guessesSoFar.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft === 9;
        alert("You must be Psychic. You Won!")
    }

    else if (userGuess != computerGuess){
        guessesLeft--;

    }

    else if (guessesLeft === 0){
        losses++;
        alert("You are not psychic, are you? You lose!")
    }
   
var html = "<h1>The Psychic Game</h1>" + 
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Wins: " + 
wins + 
"</p>" +
"<p>Losses: " + 
losses + 
"</p>" +
"<p>Guesses Left: " + 
guessesLeft + 
"</p>" +
"<p>Your Guesses so far: " +
guessesSoFar +
"</p>"
;

document.querySelector('#game').innerHTML = html;
}
