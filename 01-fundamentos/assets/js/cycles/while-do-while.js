const cars = ['Ford', 'Chevrolet', 'Fiat', 'Volkswagen'];

console.warn('While');

let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

console.warn('Do while');
let j = 0;
do {
    console.log(cars[j]);
    j++;
}while (j < cars.length);