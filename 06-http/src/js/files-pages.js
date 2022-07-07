import { uploadImage } from './http-provider.js';

const body = document.body;
let inputFile, imgPhoto;

const createInputFileHtml = () => {
    const html = `
        <h1 class="mt-5">Upload files</h1>
        <hr>

        <label for="file">Select a file:</label>
        <input type="file" accept="image/*">
        <br>

        <img id="imgPhoto" class="img-thumbnail" src="">

    `
    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    inputFile = document.querySelector('input[type="file"]');
    imgPhoto = document.querySelector('#imgPhoto');

}

const events = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        uploadImage(file).then( url => {
            imgPhoto.src = url;
        });
    });
}


export const init = () => {
    createInputFileHtml();
    events();
}