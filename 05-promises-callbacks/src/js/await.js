import { findHeroAsync } from './promises';

const heroesIds = ['capi', 'iron', 'hulk', 'thor', 'spider'];

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
