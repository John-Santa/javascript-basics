import { findHeroAsync } from './promises';

const heroesIds = ['capi', 'iron', 'hulk', 'thor', 'spider'];

const heroesPromises = heroesIds.map( findHeroAsync );

export const obtainHeroArr = async () => {

    return  await Promise.all( heroesIds.map( findHeroAsync ) );

/*
    const heroArr = [];

    for (const id of heroesIds) {
        heroArr.push(findHeroAsync(id));
    };
    return await Promise.all( heroArr );*/
}

export const obtainHeroAwait = async (heroId) => {
    try {
        return await findHeroAsync(heroId);
    } catch (error) {
        return {
            name: '',
            team: '',
            superpower: [],
        };
    }
}

export const cicleHeroes = async () => {
    console.time('Heroes cicle');

    for await(const heroe of heroesPromises){
        console.log(heroe);
    }

    console.timeEnd('Heroes cicle');
    /*const heroes = await Promise.all( heroesPromises );
    heroes.forEach( console.log );*/
}

export const conditionalHeroAwait = async (heroId) => {
    if ( await (findHeroAsync(heroId)).name === 'Ironman') {
        console.log('He is the best hero');
    } else {
        console.log('He is not the best hero');
    }
}