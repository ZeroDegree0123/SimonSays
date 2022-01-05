/*----- constants -----*/
// const lightChoices = [
//     {color: 'blue', opacity: 1, time: 1000},
//     {color: 'red', opacity: 1, time: 1000},
//     {color: 'yellow', opacity: 1, time: 1000},
//     {color: 'green', opacity: 1, time: 1000},
//     {color: 'purple', opacity: 1, time: 1000},
//     {color: 'orange', opacity: 1, time: 1000},
//     {color: 'cyan', opacity: 1, time: 1000},
//     {color: 'dark green', opacity: 1, time: 1000}
// ]
const BASE_LIT_TIME = 2000;
let LIT_TIME;
let GAP_TIME = 400;
const LEVEL_JUMP = 2;
const LEVEL_DEC_TIME = 500;

/*----- app's state (variables) -----*/

let playerSequence; // holds player moves
let computerSequence; // holds computer moves
let start; // true once start button is clicked when computer
let result; // false when player looses
let gameInPlay; // true when computer makes move


// let gameSquence; 
// let playerMove;
// let computerMove;

/*----- cached element references -----*/
const lightEls = Array.from(document.querySelectorAll('section > div'));
// const lightEls = document.querySelectorAll('section > button');

let startButton = document.querySelector('.replay')




const lightUp = function() {
    lightEls[0].classList.add('light')
    lightEls[1].classList.add('light')
    lightEls[2].classList.add('light')
    lightEls[3].classList.add('light')
}

const standard = function() {
    lightEls[0].classList.remove('light')
    lightEls[1].classList.remove('light')
    lightEls[2].classList.remove('light')
    lightEls[3].classList.remove('light')
}


/*----- event listeners -----*/
document.querySelector('button')
    .addEventListener('click', handleClick);



/*----- functions -----*/

init();

function init() {
    playerSequence =  [];
    computerSequence =  [];
    start =  false;
    result =  false;
    gameInPlay =  false;

    // playerMove = [];
    // computerMove = [];
    // gameSequence = [0, 1, 2, 3];
};



function handleClick(evt) {
    if (evt.target.tagName !== 'BUTTON') return;
    startButton = evt.target.textContent.toLowerCase();

    gameStart();
}


function gameStart() {
    gameInPlay = true;
    play = true;

    standard()
    render()
}

function render(cb) {
    gameInPlay = true;
    let idx = 0;
    const timerId = setInterval(function() {
      const btn = lightEls[idx];
      lightUp();
      setTimeout(function() {
        standard();
      }, LIT_TIME);
      idx++;
      if (idx === lightEls.length) {
        clearInterval(timerId);
        gameInPlay = false;
        setTimeout(cb, LIT_TIME);
      }
    }, LIT_TIME + GAP_TIME);
  }

function lose() {
    lightUp();

}

function computerTurn() {
    gameInPlay = true
    playerSequence = [];
    computerSequence(Math.floor(Math.random() * 4));

    playerTurn();
}

function playerTurn() {
    gameInPlay = false;
    playerSequence = [];
    start = true;
}


