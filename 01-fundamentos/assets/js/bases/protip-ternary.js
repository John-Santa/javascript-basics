const higher = (a, b) => a > b ? a : b;

const itsMember = (member) => (member) ? '$2' : '$10';

const friend = true;
const friends = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
]

const rating = 65;
const grade = rating >= 95 ? 'A' : rating >= 80 ? 'B' : rating >= 70 ? 'C' : rating >= 60 ? 'D' : 'F';

console.log(higher(5, 10));
console.log(itsMember(true));
console.log(friends);
console.log(grade);