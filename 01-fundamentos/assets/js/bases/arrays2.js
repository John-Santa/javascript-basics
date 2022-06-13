/**
 *  *Arrays Methods
 */

let games = ['Super Mario', 'GTA V', 'Crash Bandicol', 'Fifa'];
console.log(`Size of the array: ${games.length}`);

games.forEach((element, index, arr) => {
    console.log(`${index}: ${element}, in the array: ${arr}`);
});