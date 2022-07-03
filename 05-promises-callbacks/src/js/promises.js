const heroes = {
    capi: {
        name: 'Captain America',
        team: 'Avengers',
        superpower: ['super strength'],
    },
    iron: {
        name: 'Ironman',
        team: 'Avengers',
        superpower: ['super strength', 'super armor', 'flight'],
    },
    hulk: {
        name: 'Hulk',
        team: 'Avengers',
        superpower: ['super strength','super healing'],
    },
    thor: {
        name: 'Thor',
        team: 'Avengers',
        superpower: ['super strength', 'super hammer', 'thunder hammer'],
    },
    spider: {
        name: 'Spiderman',
        team: 'Avengers',
        superpower: ['super strength', 'super speed', 'super armor', 'web-slinging'],
    }
}

export const findHero = (id) => {
    const hero = heroes[id];

    return new Promise((resolve, reject) => {
        (hero) ? resolve(hero) : reject(`Hero with id ${id} not found`);
    })
};

export const findHeroAsync = async(id) => {
    const hero = heroes[id];

    if (hero) {
        return hero;
    } else {
        throw `Hero with id ${id} not found`;
    }

};

const slowPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Slow promise'), 2000 );
});

const mediumPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Medium promise'), 1500 );
});

const fastPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Fast promise'), 1000 );
});

export {
    slowPromise,
    mediumPromise,
    fastPromise
}