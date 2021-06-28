'use strict';

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let curScore = 0,
  curPlayer = 0,
  playing = true;
const scores = [0, 0];

const toggleFunc = function () {
  document.getElementById(`current--${curPlayer}`).textContent = curScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  curPlayer = curPlayer === 0 ? 1 : 0;
};

const updateScores = function () {
  score0.textContent = scores[0];
  score1.textContent = scores[1];
};

const reset = function () {
  scores[0] = 0;
  scores[1] = 0;
  curScore = 0;
  updateScores();
  if (curPlayer === 1) toggleFunc();
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

const gameOver = function () {
  dice.classList.add('hidden');
  alert('Game Over!');
};

btnRoll.addEventListener('click', function () {
  if (!playing) {
    gameOver();
    return;
  }
  const rand = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${rand}.png`;
  if (rand !== 1) {
    curScore += rand;
    document.getElementById(`current--${curPlayer}`).textContent = curScore;
  } else {
    curScore = 0;
    toggleFunc();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) {
    gameOver();
    return;
  }
  scores[curPlayer] += curScore;
  if (scores[curPlayer] >= 20) {
    document
      .querySelector(`.player--${curPlayer}`)
      .classList.add('player--winner');
    playing = false;
    gameOver();
  }
  curScore = 0;
  updateScores();
  toggleFunc();
});

btnNew.addEventListener('click', reset);
