/**
 * Autoinvoked function
 *  * Are functions that call themselves
 */
const game = (() => {
    'use strict';
    let deck = [];
    //HTML REFERENCES
    const btnNewGame = document.querySelector('#btnNewGame'),
        btnAskCard = document.querySelector('#btnAskCard'),
        btnStay = document.querySelector('#btnStay'),
        board = document.querySelectorAll('small'),
        cards = document.querySelectorAll('.divCards')

    let playerPoints;


    const gameInit = (numberOfPlayers = 1) => {
        deck = createDeck()
        playerPoints = [];
        for (let index = 0; index <= numberOfPlayers; index++) {
            playerPoints.push(0);
            cards[index].innerHTML = '';
            board[index].innerText = ' - 0';
        }
    }

    const createDeck = () => {
        deck = [];
        const suits = ['C', 'D', 'H', 'S'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let value of values) {
                deck.push(value + suit);
            }
        }
        return _.shuffle(deck);
    }

    const askForCard = (turn) => {
        return deck.length > 0 ? deck.pop() : 'No more cards';
    }

    const cardValue = (card) => {
        const value = card.slice(0, -1);
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10 :
            parseInt(value);
    }

    const showCard = (card, turn) => {
        const cardPlayer = document.createElement('img');
        cardPlayer.src = `assets/cards/${card}.png`;
        cardPlayer.classList.add('card-player');
        cards[turn].appendChild(cardPlayer);
    };

    const determinateWinner = () => {
        const [player, computer] = playerPoints;

        if (player > 21) {
            board[0].innerText = ' You lose!';
            board[1].innerText = ' You win!';
        } else if (computer > 21 ) {
            board[0].innerText = ' You win!';;
            board[1].innerText = ' You lose!';
        } else if (player === computer) {
            board[0].innerText = ' You draw!';
            board[1].innerText = ' You draw!';
        } else {
            board[0].innerText = ' You lose!';
            board[1].innerText = ' You win!';
        }
    }

    //* 0 = player, lastPosition = dealer
    const accumulatePoints = (card, turn) => {
        let valueOfCard = cardValue(card);
        playerPoints[turn] = parseInt(playerPoints[turn]) + valueOfCard;
        board[turn].innerText = ` - ${playerPoints[turn]}`;
        return playerPoints[turn];
    }


    const turnOfDealer = (minimumPoints) => {
        do {
            const playersQuantity = playerPoints.length;
            const card = askForCard();
            showCard(card, playersQuantity - 1);
            accumulatePoints(card, playersQuantity - 1);
        } while (playerPoints[1] < minimumPoints && minimumPoints <= 21);

        determinateWinner();
    }



    //Events
    btnAskCard.addEventListener('click', () => {
        if (playerPoints[0] < 21) {
            const card = askForCard();
            showCard(card, 0);
            accumulatePoints(card, 0);
        } else {
            btnAskCard.disabled = false;
        }
    });

    btnStay.addEventListener('click', () => {
        btnAskCard.disabled = true;
        btnStay.disabled = true;
        turnOfDealer(playerPoints[0]);
    });

    btnNewGame.addEventListener('click', () => {
        console.clear();
        gameInit();
        btnAskCard.disabled = false;
        btnStay.disabled = false;
    });

    return {
        newGame: gameInit,
    };

})();