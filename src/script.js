let buttons = document.querySelectorAll('button');
let compScreen = document.querySelector('#computer-screen span');
let playerScreen = document.querySelector('#player-screen span');
let compPts = document.getElementById('compPts');
let playerPts = document.getElementById('playerPts');
let announce = document.querySelector('#announce h2');
announce.textContent = "HI"
let compPt = 0;
let playerPt = 0;

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

      let sanitizeHTML = function (str) {

      }

      let display = function (computerSelection, playerSelection) {
        let s = "<img src='../imgs/scissor.svg' style='width: 60px;' />"
        // let s = "'../imgs/scissor.scg' style='width: 60px; '"
        let r = "<img src='../imgs/rock.svg' style='width: 60px;'/>";
        let p = "<img src='../imgs/paper.svg' style='width: 60px;' />"
        let cOutput, pOutput;
        switch (computerSelection) {
          case 'scissor':
            cOutput = s;
            break;
          case 'rock':
            cOutput = r;
            break;
          case 'paper':
            cOutput = p;
            break;
        }

        switch (playerSelection) {
          case 'scissor':
            pOutput = s;
            break;
          case 'rock':
            pOutput = r;
            break;
          case 'paper':
            pOutput = p;
            break;
        }

        compScreen.innerHTML = cOutput;
        playerScreen.innerHTML = pOutput;
      }

      play();
    },
    false)

}