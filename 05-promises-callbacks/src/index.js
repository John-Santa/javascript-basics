import './styles.css';
import { findHero, findHeroAsync } from './js/promises';

findHero('capi').then( console.log );
findHeroAsync('iron').then( console.log );
