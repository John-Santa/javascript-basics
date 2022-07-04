import './styles.css';
import { obtainHeroArr, obtainHeroAwait } from './js/await.js';

console.time('await')

obtainHeroArr().then( heroes => {
    console.table (heroes);
    console.timeEnd('await');
});

console.time('Await')
obtainHeroAwait('capi2').then( hero => {
    console.log (hero);
    console.timeEnd('Await');
});