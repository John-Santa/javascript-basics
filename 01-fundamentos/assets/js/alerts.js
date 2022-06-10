/**
 * Tipos de alertas
 *      * alert: muestra una alerta.
 *          * Es bloqueante.
 *      * prompt: muestra una alerta con un input para ingreso de datos.
 *          * Es bloqueante.
 *          * Retorna el valor ingresado.
 *      * confirm: muestra una alerta con un boton de confirmacion.
 *          * Es bloqueante.
 *          * Retorna true o false.
 *          * Si se presiona cancelar, retorna false, sino retorna true.
 */
alert('Hello world!');
let name = prompt('What is your name?', 'Sin nombre');
console.log(`Hola***${name}***`);
const selection = confirm('Are you sure?');
console.log(selection);

