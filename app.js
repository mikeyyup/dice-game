'use strict';

const roll = document.getElementById('roll');
const reset = document.getElementById('reset');
let message = document.getElementById('win-banner');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const title = document.getElementById('title');
const dice = document.querySelectorAll('.dice');
const modal = document.getElementsByTagName('div')[0];
const playAgain = document.getElementById('play-again-btn');
const playCards = document.getElementsByClassName('player-cards');
const winScreen = document.querySelectorAll('.players-cards');

let playing = true;
let currentScore1, currentScore2, gamePlay;

const winBlur = function () {
  winScreen[0].classList.add('blur');
  winScreen[1].classList.add('blur');
  title.classList.add('blur');
  title.textContent = 'Thanks for Playin :)';
};

const winner1 = function () {
  message.textContent = 'PLAYER 1 WINS!';
  document.getElementById('roll').disabled = true;
  modal.classList.remove('hidden');
  winBlur();
};

const winner2 = function () {
  message.textContent = 'PLAYER 2 WINS!';
  document.getElementById('roll').disabled = true;
  modal.classList.remove('hidden');
  winBlur();
};

const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1 = 0;
  currentScore2 = 0;
  document.getElementById('roll').disabled = false;
  playing = true;
  message.innerHTML = 'The Dice Game';
  roll.classList.remove('hidden');
  modal.classList.add('hidden');
  winScreen[0].classList.remove('blur');
  winScreen[1].classList.remove('blur');
  title.classList.remove('blur');
  title.textContent = 'The Dice Game';
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
    winner1();
  } else if (score2.innerHTML >= 10 && score1.innerHTML < 10) {
    winner2();
  } else if (score1.innerHTML >= 10 && score2.innerHTML >= 10) {
    if (score1.innerHTML > score2.innerHTML) {
      winner1();
    } else if (score2.innerHTML > score1.innerHTML) {
      winner2();
    }
  }
});

// RESET BUTTON
reset.addEventListener('click', init);
// PLAY AGAIN BUTTON
playAgain.addEventListener('click', init);

// console.log(winScreen);
