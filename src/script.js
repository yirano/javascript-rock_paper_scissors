let buttons = document.querySelectorAll('button');
let compScreen = document.getElementById('computer-screen');
let playerScreen = document.getElementById('player-screen');
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
      let compPlayed = random[Math.floor(Math.random() * 3)].toLowerCase();
      compScreen.textContent = compPlayed;
      return compPlayed;
    }

    let playerPlay = function () {
      playerScreen.textContent = e.target.id;
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
    }

    play();
  }, false)

}