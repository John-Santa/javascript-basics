import { findHeroAsync } from './promises';

const heroesIds = ['capi', 'iron', 'hulk', 'thor', 'spider'];

export const obtainHeroArr = async () => {

    return  Promise.all( heroesIds.map( findHeroAsync ) );

/*
    const heroArr = [];

    for (const id of heroesIds) {
        heroArr.push(findHeroAsync(id));
    };
    return await Promise.all( heroArr );*/
}
