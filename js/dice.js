// ==================== declare the variables ====================
const imgDice = document.querySelector('.dice')
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNewGame = document.querySelector('.btn--new')

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')

// ==================== start the game ====================
let playerScores, currentScore, activePlayer, gaming
const startGame = () => {
    playerScores = [0, 0]
    currentScore = 0
    activePlayer = 0
    gaming = true

    imgDice.classList.add('hidden')

    current0.innerHTML = 0;
    current1.innerHTML = 0;
    score0.innerHTML = 0;
    score1.innerHTML = 0;

    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
startGame();

// ==================== switch the game between the gamer ====================
const switchPlayer = () =>{
    currentActive = document.getElementById(`current--${activePlayer}`)
    currentActive.innerHTML = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// ==================== 🎲 Roll Dice ====================
const diceArray = ["./img/dice-1.png", "./img/dice-2.png", "./img/dice-3.png", "./img/dice-4.png", "./img/dice-5.png", "./img/dice-6.png"]

btnRollDice.addEventListener('click', () => {
    imgDice.classList.remove('hidden')
    imgDice.classList.add('animate')
    setTimeout(() => {
        imgDice.classList.remove('animate')
    }, 1000);

    if(gaming === true){
        randomDice = Math.floor(Math.random() * diceArray.length)
        imgDice.setAttribute('src', diceArray[randomDice])
        currentActive = document.getElementById(`current--${activePlayer}`)

        if(randomDice+1 !== 1){
            currentScore += randomDice+1
            currentActive.innerHTML = currentScore
        }else{
            switchPlayer();
        }
    }
});

// ==================== 📥 Hold Dice ====================
btnHold.addEventListener('click', () =>{
    if(gaming === true){
        scoreActive = document.getElementById(`score--${activePlayer}`)
        playerScores[activePlayer] += currentScore;
        scoreActive.innerHTML = playerScores[activePlayer]
        
        if(playerScores[activePlayer] >= 10){
            playerActive = document.querySelector(`.player--${activePlayer}`)
            playerActive.classList.add('player--winner')
            currentActive.innerHTML = 0

            gaming =false;
        }else{
            switchPlayer();
        }
    }
})

// ==================== 🔄 Start New Game ====================
btnNewGame.addEventListener('click', startGame)