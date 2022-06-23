import '../css/components.css'

export const sayHelloByName = (name) => {
    console.log('Creating h1 tag');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hello ${name}`;
    document.body.appendChild(h1);
}

