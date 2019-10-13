+++
title = "The functionality for the Dice Game."
date = "2019-10-12"
draft = false
pinned = false
tags = ["Java"]
image = "/img/j.png"
footnotes = "That is the My First Game."
+++
The Functionality for the Dice Game.

`var scores, roundScores, activePlayer, gamePlaying;`

`init();`

``

`document.querySelector(".btn-roll").addEventListener('click', function() {`

`if (gamePlaying) {`

``

`// We need a random number;`

`var dice = Math.floor(Math.random() * 6) + 1;`

`// show the result.`

`var diceDOM = document.querySelector(".dice");`

`diceDOM.style.display = 'block';`

`diceDOM.src = 'dice-' + dice + '.png';`

``

`// If the number is not a 1 it has to be reloaded.`

`if (dice !== 1) {`

`roundScores += dice;`

`document.querySelector('#current-' + activePlayer).textContent = roundScores;`

`} else {`

`nextPlayer();`

`}`

`}`

``

`});`

``

`document.querySelector('.btn-hold').addEventListener('click', function() {`

`if (gamePlaying) {`

`scores[activePlayer] += roundScores;`

`//Update the UI`

`document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];`

`// Who win the game`

`if (scores[activePlayer] >= 20) {`

`document.querySelector('#name-' + activePlayer).textContent = 'Winner!';`

`document.querySelector('.dice').style.display = 'none';`

`document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');`

`document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');`

`gamePlaying = false;`

`} else {`

`//Next Player`

`nextPlayer();`

`}`

`}`

`});`

``

`function nextPlayer() {`

`activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;`

`roundScores = 0;`

`document.getElementById('current-0').textContent = '0';`

`document.getElementById('current-1').textContent = '0';`

``

`document.querySelector('.player-0-panel').classList.toggle('active');`

`document.querySelector('.player-1-panel').classList.toggle('active');`

`document.querySelector('.dice').style.display = 'none';`

`// document.querySelector('.player-0-panel').classList.remove('active');`

`// document.querySelector('.player-1-panel').classList.add('active');`

`}`

``

`document.querySelector('.btn-new').addEventListener('click', init);`

``

`function init() {`

`scores = [0, 0];`

`activePlayer = 0;`

`roundScores = 0;`

`gamePlaying = true;`

`document.querySelector('.dice').style.display = 'none';`

`document.getElementById("score-0").textContent = "0";`

`document.getElementById("score-1").textContent = "0";`

`document.getElementById("current-0").textContent = "0";`

`document.getElementById("current-1").textContent = "0";`

``

`document.getElementById('name-0').textContent = 'Player 1';`

`document.getElementById('name-1').textContent = 'Player 2';`

``

`document.querySelector('.player-0-panel').classList.remove('winner');`

`document.querySelector('.player-1-panel').classList.remove('winner');`

`document.querySelector('.player-0-panel').classList.remove('active');`

`document.querySelector('.player-1-panel').classList.remove('active');`

`document.querySelector('.player-0-panel').classList.add('active');`

`}`

![The result image for dice game after the functionality ](/img/screen-shot-2019-10-14-at-00.15.46.png)
