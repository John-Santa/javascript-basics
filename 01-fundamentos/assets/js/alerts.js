/**
* Types of alerts
  * * alert: Display an alert.
  * * It is blocking.
  * * prompt: displays an alert with an input for data entry.
  * * It is blocking.
  * * Returns the entered value.
  * * confirm: displays an alert with a confirmation button.
  * * It is blocking.
  * * Returns true or false.
  * * If cancel is pressed, it returns false, otherwise it returns true.
 */
alert('Hello world!');
let name = prompt('What is your name?', 'Sin nombre');
console.log(`Hola***${name}***`);
const selection = confirm('Are you sure?');
console.log(selection);

