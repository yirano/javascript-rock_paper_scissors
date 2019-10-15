let computerPlay = function() {
  let random = ['Rock', 'Paper', 'Scissor']
  return random[Math.floor(Math.random() * 3)].toLowerCase();
}

let playerPlay = function(){
  return prompt("What's it gonna be player?").toLowerCase();
}

let play = function(computerSelection=computerPlay(), playerSelection=playerPlay()) {
  if (computerSelection == 'rock') {
    if (playerSelection == 'scissor') {
      return 'c';
    } else if (playerSelection == 'paper') {
      return 'p';
    } else {
      return 0;
    }
  } else if (computerSelection == 'scissor') {
    if (playerSelection == 'rock') {
      return 'p';
    } else if (playerSelection = "paper") {
      return 'c';
    } else {
    }
  } else if (computerSelection == 'paper') {
    if (playerSelection == 'rock') {
      return 'c';
    } else if (playerSelection == 'scissor') {
      return 'p';
    } else {
      return 0;
    }
  }
}

let game = function() {
  let comp = 0;
  let player = 0;
  let played = 0;
  while (played < 5) {
    let winner = play();
    if (winner== 'c') {
      comp+=1;
    } else if (winner=='p') {
      player+=1;
    } 
    played+=1
  }
    return comp > player ? `Computer won with ${comp} points!` : `Player won with ${player} points!`;
}


console.log(game());
