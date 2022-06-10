/**
 * Arrays
 *  * The array is a special object in JavaScript. It is used to store multiple values in a single variable.
 *  * Arrays are denoted by square brackets [].
 *  * Arrays can contain any type of data.
 *  * Arrays can contain multiple values of the same type.
 */

//* Example 1:
//*     * const array = [];
//*     * const array = new Array(10);
let videoGames = ['Super Mario', 'Mario Kart', 'Super Mario Odyssey', 'Super Smash Bros', 'Super Mario World'];
console.log( {videoGames} );

//* Print first element of the array:
console.log(videoGames[0]);

//* Example 2:
let consolesAndGames = [
    ['Nintendo', 'Super Mario', 'Mario Kart', 'Super Mario Odyssey'],
    ['Sony', 'Playstation', 'Playstation 2', 'Playstation 3'],
    ['Microsoft', 'Xbox', 'Xbox 360', 'Xbox One']
];

console.log(`The name of the first console is: ${consolesAndGames[0][0]}`);