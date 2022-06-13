const heroes = ['Batman', 'Superman', 'Flash', 'SuperWoman'];

console.warn('For');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('For In');
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For Of');
for (let hero of heroes) {
    console.log(hero);
}