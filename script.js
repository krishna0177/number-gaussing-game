let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#GuessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrhi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;
if (playGame) {
     submit.addEventListener('click', function (e) {
          e.preventDefault();
          const UserInput = document.querySelector('#GuessField');
          const guess = parseInt(UserInput.value);
          console.log(guess);
          validateGuess(guess);

     })
}

function validateGuess(guess) {
     if(isNaN(guess)){
          alert('please enter a valid number')
     }
     else if(guess<1){
          alert('please enter a number more than 1')
     }
     else if(guess>100){
          alert('please enter a number less then 100')
     }
     else{
          prevGuess.push(guess)
          if(numGuess === 11){
               displayGuess(guess);
               displayMessage(`Game over. Random number was ${randomNumber}`);
               endGame();
          }
          else{
               displayGuess(guess)
               checkGuess(guess)
          }
     }
}


function checkGuess(guess) {
     if(guess === randomNumber ){
          displayMessage(`you guested right `);
          endGame();
     }
     else if(guess < randomNumber){
          displayMessage(`number is too low `);

     }
     else if(guess > randomNumber){
          displayMessage(`number is too high `);
          
     }
}

function displayGuess(guess) {
     UserInput.value = '';
     guessSlot.innerHTML += `${guess},  `
     numGuess++;
     remaining.innerHTML = `${10- numGuess} `
}

function displayMessage(message) {
     lowOrhi.innerHTML = `<h3> ${message} </h3>`;
}

function endGame() {
     UserInput.value = '';
     UserInput.setAttribute('disabled', '')
     p.classList.add('button');
     p.innerHTML = `<h2 id="newGame">start new game </h2>`
     startOver.appendChild(p);
     playGame= false;
     newGame();
}

function newGame() {
     const newGameButton = document.querySelector('#newGame')
     newGameButton.addEventListener(click, function(e){
          randomNumber = parseInt(Math.random() * 100 + 1);
          prevGuess = [];
          numGuess = 1;
          guessSlot.innerHTML = '';
          remaining.innerHTML = `${10 - numGuess} `;
          UserInput.removeAttribute('disabled');
          startOver.removeChild(p);

          playGame = false;
     })
}