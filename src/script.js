let buttons = document.querySelectorAll('button');
let compScreen = document.querySelector('#computer-screen p');
let playerScreen = document.querySelector('#player-screen p');
let compPts = document.getElementById('compPts');
let playerPts = document.getElementById('playerPts');
let announce = document.querySelector('#announce h2');
let compPt = 0;
let playerPt = 0;
let cOutput, pOutput;

for (const button of buttons) {

  button.addEventListener("click", function (e) {

      let computerPlay = function () {
        let random = ['Rock', 'Paper', 'Scissor']
        return random[Math.floor(Math.random() * 3)].toLowerCase();;
      }

      let playerPlay = function () {
        return e.target.id
      }

      let play = function (computerSelection = computerPlay(), playerSelection = playerPlay()) {

        if (computerSelection == 'rock') {
          if (playerSelection == 'scissor') {
            compPt += 1;
          } else if (playerSelection == 'paper') {
            playerPt += 1;
          } else {
            playerPt += 0;
            compPt += 0;
          }
        } else if (computerSelection == 'scissor') {
          if (playerSelection == 'rock') {
            playerPt += 1;
          } else if (playerSelection == "paper") {
            compPt += 1;
          } else {
            playerPt += 0;
            compPt += 0;
          }
        } else if (computerSelection == 'paper') {
          if (playerSelection == 'rock') {
            compPt += 1;
          } else if (playerSelection == 'scissor') {
            playerPt += 1;
          } else {
            playerPt += 0;
            compPt += 0;
          }

        }
        playerPts.textContent = playerPt;
        compPts.textContent = compPt;
        display(computerSelection, playerSelection);
      }

      let display = function (computerSelection, playerSelection) {
        playerScreen.classList = playerSelection;
        compScreen.classList = computerSelection;
      }

      play();
    },
    false)

}