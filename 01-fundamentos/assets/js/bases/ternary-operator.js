/**
 * Weekdays we open at 11, but on weekends we open at 9
 *  Go to a website to see if it's open today.
*/

const daysWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

const day = new Date().getDay();
const currentTime = new Date().getHours();

const openingTime = day > 0 && day < 6 ? 11 : 9;
const closingTime = day > 0 && day < 6 ? 17 : 15;

let message = currentTime > openingTime && currentTime < closingTime  ? 'Its open'  : 'Its closed';

console.log(message);