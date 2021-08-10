'use strict';

const roll = document.getElementById('roll');
const reset = document.getElementById('reset');
let message = document.getElementById('title');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const dice = document.querySelectorAll('.dice');
let playing = true;
let currentScore1, currentScore2, gamePlay;

const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1 = 0;
  currentScore2 = 0;
  document.getElementById('roll').disabled = false;
  playing = true;
  message.innerHTML = 'The Dice Game';
  roll.classList.remove('hidden');
};

init();

// ROLL FEATURE
gamePlay = roll.addEventListener('click', function () {
  if (playing) {
    const diceNum1 = Math.trunc(Math.random() * 6) + 1;
    dice[0].src = `dice-${diceNum1}.png`;
    const diceNum2 = Math.trunc(Math.random() * 6) + 1;
    dice[1].src = `dice-${diceNum2}.png`;
    currentScore1 += diceNum1;
    currentScore2 += diceNum2;
    score1.textContent = currentScore1;
    score2.textContent = currentScore2;
  }
  // GAME LOGIC
  if (score1.innerHTML >= 10 && score2.innerHTML < 10) {
    message.textContent = 'PLAYER 1 WINS!';
    roll.classList.add('hidden');
  } else if (score2.innerHTML >= 10 && score1.innerHTML < 10) {
    message.textContent = 'PLAYER 2 WINS!';
    roll.classList.add('hidden');
  } else if (score1.innerHTML >= 10 && score2.innerHTML >= 10) {
    if (score1.innerHTML > score2.innerHTML) {
      message.textContent = 'PLAYER 1 WINS!';
      roll.classList.add('hidden');
    } else if (score2.innerHTML > score1.innerHTML) {
      message.textContent = 'PLAYER 2 WINS!';
      roll.classList.add('hidden');
    } else {
      console.log('no winner yet');
    }
  }
});

// RESET BUTTON
reset.addEventListener('click', init);
