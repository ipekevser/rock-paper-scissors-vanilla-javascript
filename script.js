const buttons = document.querySelectorAll("button");
const icons = ["✌️","✋","✊"];
const playConsole = ["Rock", "Paper", "Scissors"];
const playerTable = document.querySelector("#playerScore");
const computerTable = document.querySelector("#computerScore");
const resetButton = document.querySelector("#resetButton");
let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
let playerChoice;
const computerCard = document.getElementById("computerCard");
const playerCard = document.getElementById("playerCard");

let newDiv = document.createElement("div");
newDiv.classList.add = "text-uppercase";
document.body.appendChild(newDiv);

let playerDiv = document.createElement("div");
playerDiv.classList.add = "card-icon";
playerCard.appendChild(playerDiv);

let computerDiv = document.createElement("div");
computerDiv.classList.add = "card-icon";
computerCard.appendChild(computerDiv);

function playerFunction(player, computer) {
  playerScore++;
  playerTable.innerHTML = playerScore;
  newDiv.innerHTML = `${player} Wins! ${computer} lost!`;
}
function computerFunction(player, computer) {
  computerScore++;
  computerTable.innerHTML = computerScore;
  newDiv.innerHTML = `${computer} Wins! ${player} lost!`;
}


for (let button of buttons) {
  button.addEventListener("click", function () {
    console.log(button.innerHTML);
    playerChoice = button.innerHTML;
    let computerChoice =
      playConsole[Math.floor(Math.random() * playConsole.length)];
    if (playerChoice === "Rock") {
      playerDiv.innerHTML = icons[2];
      if (computerChoice === "Scissors") {
        computerDiv.innerHTML = icons[0];
        playerFunction(playerChoice, computerChoice);
        
      } else if (computerChoice === "Paper") {
        computerDiv.innerHTML = icons[1];
        computerFunction(playerChoice, computerChoice);
       
      } else {
        computerDiv.innerHTML = icons[2];
        newDiv.innerHTML = "Equal. Both of them are rock!";
        
      }
    } else if (playerChoice === "Paper") {
      playerDiv.innerHTML= icons[1];
      if (computerChoice === "Rock") {
        playerFunction(playerChoice, computerChoice);
        computerDiv.innerHTML = icons[2];
      } else if (computerChoice === "Scissors") {
        computerFunction(playerChoice, computerChoice);
        computerDiv.innerHTML = icons[0];
      } else {
        newDiv.innerHTML = "Equal. Both of them are paper!";
        computerDiv.innerHTML = icons[1];
      }
    }else {
      playerDiv.innerHTML= icons[0];
      if (computerChoice === "Rock") {
        computerFunction(playerChoice, computerChoice);
        computerDiv.innerHTML = icons[2];
      } else if (computerChoice === "Paper") {
        playerFunction(playerChoice, computerChoice);
        computerDiv.innerHTML = icons[1];
      } else {
        newDiv.innerHTML = "Equal. Both of them are scissors!";
        computerDiv.innerHTML = icons[0];
      }
    }
  });
}
