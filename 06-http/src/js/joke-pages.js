import { obtainJoke } from './http-provider';

const body = document.body;
let counter = 1;
let btnOtherJoke, olList;

const createHtmlJokes = () => {
    const htmlJokes = `
        <h1 class="mt-5">Jokes</h1>
        <hr>
        <button class="btn btn-primary">Other joke</button>

        <ol class="mt-2 list-group">
            <li class="list-group-item">...</li>
        </ol>
    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = htmlJokes;

    body.appendChild(divJokes);
}

const events = () => {

    olList = document.querySelector('ol');
    btnOtherJoke = document.querySelector('button');

    btnOtherJoke.addEventListener('click', async () => {
        try {
            btnOtherJoke.disabled = true;
            paintJoke(await obtainJoke());
            btnOtherJoke.disabled = false;
        } catch (error) {
            throw error;
        }
    });
}

const paintJoke = (joke) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `${ counter }. <b>${ joke.id }</b>: ${ joke.value }`;
    counter++;
    olItem.classList.add('list-group-item');

    olList.appendChild(olItem);
}

export const init = () => {
    createHtmlJokes();
    events();
}