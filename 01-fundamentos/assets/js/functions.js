/**
 * Funtions
 *  * the function is a block of code that can be used repeatedly.
 *  * functions are named and can be called after they are defined.
 *  * They contain an explicit element called arguments.
 */

//* Not recommended
function sayHelloByName(name) {
    return `Hello ${name}`;
}

console.log(sayHelloByName('John'));


// * Recommended
const sayHelloByName2 = function (name) {
    return `Hello ${name}`;
}

console.log(`${sayHelloByName2('John')}  from function 2`);

//* Arrow functions
const sayHelloByName3 = (name) => `Hello ${name}`;

console.log(`${sayHelloByName3('John')}  from function 3`);

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());