import { findHero } from './js/callbacks';
import './styles.css';

//* Callbacks
//* Callbacks are functions that are passed to other functions as arguments.

const hero1 = 'capi';
const hero2 = 'iron';

//* Callback hell
findHero( hero1, ( err, hero1 ) => {
    if(err) { return console.error(err); }

    findHero(hero2, (err, hero2) => {
        if(err) { return console.error(err); }

        console.log(`Send ${hero1.name} and ${hero2.name} to the battle!`);
    });
});