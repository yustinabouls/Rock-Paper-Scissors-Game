let choices = ["rock", "paper", "scissors"]

// console log all values in the array 
// console.log(choices)

// console log only paper
// console.log(choices[1])


let gameStats = { 
    wins: 0,
    losses: 0,
    ties: 0
};

// console.log(gamestats.wins)

let player = {
     choice: null 
    
};

function playRock() {
    player.choice = "rock"
    playGame()

}

function  playPaper() {
    player.choice = "paper"

    playGame()
}

function  playScissors() {
    player.choice = "scissors"

    playGame()
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameStats.ties++;
    displayMessage("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    gameStats.wins++;
    displayMessage(
      "You win! " + playerChoice + " beats " + computerChoice + "."
    );
  } else {
    gameStats.losses++;
    displayMessage(
      "You lose! " + computerChoice + " beats " + playerChoice + "."
    );
  }
  updateGameStats();
}


function playGame() {
    let isAlive = true;
    if (isAlive) {
    let computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerText =
    "Computer's Choice: " + computerChoice;

    document.getElementById("player-choice").innerText =
    "player's Choice: " + player.choice;
    
    compareChoices(player.choice, computerChoice);
    }
    UpdateGameTitle()
    }


function getComputerChoice() {
   return choices[Math.floor(Math.random() * choices.length)]

  }

 function displayMessage(msg) {
    // get the docoment

    // get the elementID "message"
    // update the innerText
    // assign it to the msg paramater

     document.getElementById("message").textContent = msg 

  }

function updateGameStats() {
     document.getElementById("game-stats").textContent =  "Wins: " +
     gameStats.wins +
     " | Losses: " +
     gameStats.losses +
     " | Ties: " +
     gameStats.ties;
}

// create a function UpdateGameTitle which updates the title from "Rock, Paper, Scissors Game" to "Rock/Paper/Scissors Application" 
// Do this by updating the textContent of the id "gameTitle"

 function UpdateGameTitle() {
    document.getElementById("gameTitle").textContent = "Rock/Paper/Scissors Application"

 }

