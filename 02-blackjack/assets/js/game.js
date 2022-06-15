/**
 * 2C Tow of Clubs.
 * 2D Two of Diamonds.
 * 2H Two of Hearts.
 * 2S Two of Spades.
 */

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

const showPlayerPoints = (points) => {
    if (points > 21) {
        board[0].innerHTML = 'Bust!';
        btnAskCard.disabled = true;
    } else {
        board[0].innerText = ` - ${points}`;
    }
};



//Events
btnAskCard.addEventListener('click', () => {
    const card = askForCard();
    const value = cardValue(card);
    pointsOfPlayer += value;

    showCard(card, true);
    showPlayerPoints(pointsOfPlayer);
});