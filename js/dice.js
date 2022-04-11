// ==================== 🎲 Roll Dice ====================
let imgDice = document.querySelector('.dice');
let btnNewGame = document.querySelector('.btn--new')
let btnRollDice = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')

let currentScore0 = document.querySelector('#current--0')
let currentScore1 = document.querySelector('#current--1')

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let totalScore0 = document.querySelector('#score--0')
let totalScore1 = document.querySelector('#score--1')

player0.classList.add('player--active');
player1.classList.remove('player--active');

let diceArray = ["./img/dice-1.png", "./img/dice-2.png", "./img/dice-3.png", "./img/dice-4.png", "./img/dice-5.png", "./img/dice-6.png"]

let sumCurrent0=0;
let sumCurrent1=0;

let finalSum0 = 0;
let finalSum1 = 0;
btnRollDice.addEventListener('click', () => {
    randomDice = Math.floor(Math.random()*diceArray.length)
    imgDice.setAttribute('src', diceArray[randomDice])

    let playerActive0 = player0.classList.contains('player--active')
    if(playerActive0 === true){
        sumCurrent0 += randomDice+1
        currentScore0.innerHTML = sumCurrent0
    }else{
        sumCurrent1 += randomDice+1
        currentScore1.innerHTML = sumCurrent1
    }

    if(diceArray[randomDice] === diceArray[0]){
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    
        let playerActive1 = player1.classList.contains('player--active')
        if(playerActive1 === true){
            finalSum0 += sumCurrent0
            totalScore0.innerHTML = finalSum0
            sumCurrent0 =0
            currentScore0.innerHTML = sumCurrent0
        }else{
            finalSum1 += sumCurrent1
            totalScore1.innerHTML = finalSum1
            sumCurrent1 =0
            currentScore1.innerHTML = sumCurrent1
        }
        if(finalSum0 >= 10){
            player0.classList.add('player--winner')
            currentScore0 =sumCurrent0 =0
            currentScore1 =sumCurrent1 =0
            imgDice.classList.add('hidden');

        }else if(finalSum1 >= 10){
            player1.classList.add('player--winner')
            currentScore0 =sumCurrent0 =0
            currentScore1 =sumCurrent1 =0
            imgDice.classList.add('hidden');
        }
    }
})

btnHold.addEventListener('click', () => {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

    let playerActive1 = player1.classList.contains('player--active')
    if(playerActive1 === true){
        finalSum0 += sumCurrent0
        totalScore0.innerHTML = finalSum0
        sumCurrent0 =0
        currentScore0.innerHTML = sumCurrent0
    }else{
        finalSum1 += sumCurrent1
        totalScore1.innerHTML = finalSum1
        sumCurrent1 =0
        currentScore1.innerHTML = sumCurrent1
    }

    if(finalSum0 >= 10){
        player0.classList.add('player--winner')
        currentScore0 =sumCurrent0 =0
        currentScore1 =sumCurrent1 =0
        imgDice.classList.add('hidden');
    }else if(finalSum1 >= 10){
        player1.classList.add('player--winner')
        currentScore0 =sumCurrent0 =0
        currentScore1 =sumCurrent1 =0
        imgDice.classList.add('hidden');
    }
})

// ==================== 🔄 Start New Game ====================
btnNewGame.addEventListener("click", () => {
    location.reload();
});