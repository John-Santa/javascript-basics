/*function createPerson(name, lastname) {
    return {
        name,
        lastname
    };
}*/

const createPerson = (name, lastname) => ({
    name,
    lastname
});

function printArgumens() {
    console.log(arguments);
}

const printArgumens2 = (...arguments) => arguments;

const person = createPerson('John', 'Santa');

console.log({
    person
});
printArgumens(10, true, 'John', 'Santa');

//* Name of Arguments
const [age, isMarried, name, lastname] = printArgumens2(10, true, 'John', 'Santa');


const {
    lastname: newLastname
} = createPerson('John', 'Santa');
console.log({
    newLastname
});

//* Deestructuracion

const tony = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    isMarried: false,
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    },
    nameOfSuperhero: 'Ironman',
    lastMovie: 'Avengers Endgame',
    isAlive: false,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
}

/*const printProperties = (superHero) => {
    console.log(`name: ${superHero.name}`);
    console.log(`lastname: ${superHero.lastname}`);
    console.log(`nameOfSuperhero: ${superHero.nameOfSuperhero}`);
    console.log(`lastMovie: ${superHero.lastMovie}`);
    console.log(`suits: ${superHero.suits}`);
}*/

//* Destructuration example
const {
    name: realName,
    lastname: superHeroLastname,
    nameOfSuperhero,
    lastMovie,
    suits
} = tony;
console.log({
    realName,
    superHeroLastname,
    nameOfSuperhero,
    lastMovie,
    suits
});