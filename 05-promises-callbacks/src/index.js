import './styles.css';
import { obtainHeroArr } from './js/await.js';

obtainHeroArr().then( console.table );