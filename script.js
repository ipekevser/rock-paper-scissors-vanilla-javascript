const selectButtons = document.querySelectorAll("#selectButtons");
const icons = ["✌️", "✋", "✊"];
const playConsole = ["Rock", "Paper", "Scissors"];
const playerTable = document.querySelector("#playerScore");
const computerTable = document.querySelector("#computerScore");
const resetButton = document.querySelector("#resetButton");
const computerText = document.querySelector("#computer");
const playerText = document.querySelector("#player");
const computerCard = document.getElementById("computerCard");
const playerCard = document.getElementById("playerCard");
const buttons = document.querySelectorAll("button");
const winningScoreSelector = document.querySelector("#playto");
let playerScore = 0;
let computerScore = 0;
let winningScore = 3;
let playerChoice;

let newDiv = document.createElement("div");
newDiv.classList.add("text-uppercase", "fw-bold", "mt-3", "p-2");
document.body.appendChild(newDiv);

let playerDiv = document.createElement("div");
playerDiv.classList.add("card-icon");
playerCard.appendChild(playerDiv);

let computerDiv = document.createElement("div");
computerDiv.classList.add("card-icon");
computerCard.appendChild(computerDiv);

function playerFunction(player, computer) {
  if (playerScore != winningScoreSelector.value) {
    playerScore++;
    if (playerScore == winningScoreSelector.value) {
      selectButtons.forEach((element) => (element.disabled = true));
      playerText.classList.add("text-success");
      computerText.classList.add("text-danger");
    }
    playerTable.innerHTML = playerScore;
    newDiv.innerHTML = `${player} Wins! ${computer} lost!`;
  }
}
function computerFunction(player, computer) {
  if (computerScore != winningScoreSelector.value) {
    computerScore++;
    if (computerScore == winningScoreSelector.value) {
      selectButtons.forEach((element) => (element.disabled = true));
      computerText.classList.add("text-success");
      playerText.classList.add("text-danger");
    }
    computerTable.innerHTML = computerScore;
    newDiv.innerHTML = `${computer} Wins! ${player} lost!`;
  }
}
function resetFunction() {
  playerDiv.innerHTML = "";
  computerDiv.innerHTML = "";
  playerScore = 0;
  playerTable.innerHTML = playerScore;
  computerScore = 0;
  computerTable.innerHTML = computerScore;
  newDiv.innerHTML = "";
  selectButtons.forEach((element) => (element.disabled = false));
  playerText.classList.remove("text-danger", "text-success");
  computerText.classList.remove("text-danger", "text-success");
}

winningScoreSelector.addEventListener("change", function () {
  winningScore = parseInt(winningScoreSelector.value);
  resetFunction();
  return winningScore;
});

for (let button of buttons) {
  button.addEventListener("click", function () {
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
      playerDiv.innerHTML = icons[1];
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
    } else if (playerChoice === "Scissors") {
      playerDiv.innerHTML = icons[0];
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
    } else {
      resetFunction();
    }
  });
}
