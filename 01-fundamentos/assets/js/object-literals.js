/**
 * Literal objects
 *  * Literal objects are objects that are created with the literal syntax.
 *  * They are structures formed by key-value pairs.
 */
let character = {
    name: 'Tony Stark',
    age: 45,
    superHero: true,
    superHeroName: 'Iron Man',
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    }
};

console.table(character)

console.log(`name: ${character.name}`);
console.log(`age: ${character['age']}`);
console.log(`address: ${character.address}`);
console.log(`number of suits: ${character.suits.length}`);
console.log(`last suit: ${character.suits[character.suits.length - 1]}`);

const data = 'superHero';
console.log(`${data}: ${character[data]}`);

/**
 * Object properties
 *  * Delete property
 */

delete character.age;
console.log(character.age);

// * Object as Array

const entriesPares = Object.entries(character);
console.log({
    entriesPares
});

//* Create new property

character.isMarried = false;

console.log({
    character
});

//* Get property names
const properties = Object.keys(character);
const values = Object.values(character);
console.log({
    properties
});
console.log({
    values
});