import './styles.css';
import { slowPromise, mediumPromise, fastPromise } from './promises';

slowPromise.then( console.log );
mediumPromise.then( message => console.log(message) );
fastPromise.then( console.log );

//* Permite ejecutar todas las promesas en conjunto y devuelve la que se resuelve mas rapido
Promise.race([slowPromise, mediumPromise, fastPromise])
    .then( console.log );