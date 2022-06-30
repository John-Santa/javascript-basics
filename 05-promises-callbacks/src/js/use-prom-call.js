import { findHero as findHeroCallback } from './callbacks';
import { findHero as findHeroPromise } from './promises';
import './styles.css';

//* Callbacks
//* Callbacks are functions that are passed to other functions as arguments.

const hero1 = 'capi';
const hero2 = 'iron';
const hero3 = 'hulk';

//* Callbacks
findHeroCallback( hero1, ( err, hero1 ) => {
    if(err) { return console.error(err); }

    findHeroCallback(hero2, (err, hero2) => {
        if(err) { return console.error(err); }

        console.log(`Send ${hero1.name} and ${hero2.name} to the battle!`);
    });
});


//* Promises  hell
/*findHeroPromise(hero1)
    .then(hero1 => {
        findHeroPromise(hero2)
        .then(hero2 => console.log(`Send ${hero1.name} and ${hero2.name} to the battle!`));
    });*/

Promise
    .all([findHeroPromise(hero1), findHeroPromise(hero2), findHeroPromise(hero3)])
    .then( ( [hero1, hero2, hero3] ) => console.log(`Send ${hero1.name}, ${hero2.name} and ${hero3.name} to the battle!`))
    .catch(err => console.error(err))
    .finally( () => console.info(`Finish`) );


