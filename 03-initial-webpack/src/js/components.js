import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const sayHelloByName = (name) => {
    console.log('Creating h1 tag');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hello ${name}`;
    document.body.appendChild(h1);

    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.appendChild(img);
}

