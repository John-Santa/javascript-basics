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

export const findHero = ( id, callback ) => {
    const hero = heroes[id];
    if (hero) {
        callback(null, hero);
    } else {
        callback(`Hero with id ${id} not found`);
    }
}