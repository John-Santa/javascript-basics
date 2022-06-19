/**
 * Autoinvoked function
 *  * Are functions that call themselves
 */
(() => {
    'use strict';

    let deck = [];
    const btnNewGame = document.querySelector('#btnNewGame');
    const btnAskCard = document.querySelector('#btnAskCard');
    const btnStay = document.querySelector('#btnStay');
    const board = document.querySelectorAll('small');
    const playerCards = document.querySelector('#player-cards');
    const dealerCards = document.querySelector('#dealer-cards');

    let pointsOfPlayer = 0;
    let pointsOfDealer = 0;

    const createDeck = () => {
        const suits = ['C', 'D', 'H', 'S'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let value of values) {
                deck.push(value + suit);
            }
        }
        deck = _.shuffle(deck);
        return deck;
    }

    createDeck();

    const askForCard = () => {
        if (deck.length === 0) {
            throw 'No cards!';
        }
        const card = deck.pop();
        return card;
    }

    const cardValue = (card) => {
        const value = card.slice(0, -1);
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10 :
            parseInt(value);
    }

    const showCard = (card, player) => {
        const cardPlayer = document.createElement('img');
        cardPlayer.src = `assets/cards/${card}.png`;
        cardPlayer.classList.add('card-player');
        if (player) {
            playerCards.appendChild(cardPlayer);
        } else {
            dealerCards.appendChild(cardPlayer);
        }
    };


    const showPoints = (points, gambler) => {
        if (gambler) {
            if (points > 21) {
                board[0].innerText = ' - Bust!';
                pointsOfPlayer = 0;
                btnAskCard.disabled = true;
                btnStay.disabled = true;
                turnOfDealer(pointsOfPlayer);
            } else {
                board[0].innerText = ` - ${points}`;
            }
        } else {
            if (points > 21) {
                board[1].innerHTML = ' - Bust!';
            } else {
                board[1].innerText = ` - ${points}`;
            }
        }
    };

    const turnOfDealer = (minimumPoints) => {
        do {
            const card = askForCard();
            showCard(card, false);
            const value = cardValue(card);
            pointsOfDealer += value;
            showPoints(pointsOfDealer, false);
        } while (pointsOfDealer < minimumPoints && pointsOfDealer < 21);

        if (pointsOfDealer == pointsOfPlayer) {
            board[1].innerText = ' - Draw!';
        } else if (pointsOfDealer > pointsOfPlayer && pointsOfDealer <= 21) {
            board[1].innerText = ' - Dealer wins!';
        } else if (pointsOfDealer > 21 && pointsOfPlayer != 0) {
            board[0].innerText = ' - Player wins!';
        }
    }



    //Events
    btnAskCard.addEventListener('click', () => {
        const card = askForCard();
        const value = cardValue(card);
        pointsOfPlayer += value;

        showCard(card, true);
        showPoints(pointsOfPlayer, true);
    });

    btnStay.addEventListener('click', () => {
        btnAskCard.disabled = true;
        btnStay.disabled = true;
        turnOfDealer(pointsOfPlayer);
    });

    btnNewGame.addEventListener('click', () => {
        deck = createDeck();
        pointsOfPlayer = 0;
        pointsOfDealer = 0;
        playerCards.innerHTML = '';
        dealerCards.innerHTML = '';
        board[0].innerText = ' - 0';
        board[1].innerText = ' - 0';
        btnAskCard.disabled = false;
        btnStay.disabled = false;
    });
})();