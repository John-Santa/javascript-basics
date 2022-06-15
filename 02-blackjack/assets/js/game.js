/**
 * 2C Tow of Clubs.
 * 2D Two of Diamonds.
 * 2H Two of Hearts.
 * 2S Two of Spades.
 */

let deck = [];

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

askForCard();