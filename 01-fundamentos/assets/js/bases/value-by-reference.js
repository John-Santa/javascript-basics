let a = 10;
let b = 20;


let juan = {
    name: 'Juan',
    age: 20
};
let pedro = juan;

console.log(juan);
console.log(pedro);

pedro.nombre = 'Pedro';
console.log(pedro);
console.log(juan);

//* Copy

let peter = {
    name: 'Peter',
    age: 20
};
let tony = {
    ...peter
};
tony.name = 'Tony';

console.log({
    peter,
    tony
});

const changeName = ({
    ...person
}, name) => {
    person.name = name;
    return person;
}

let john = changeName(peter, 'John');
console.log({
    peter,
    john
});

//* Arrays
const fruits = ['apple', 'banana', 'orange'];
const anotherFruits = [...fruits];

anotherFruits.push('grape');

console.table({
    fruits,
    anotherFruits
});