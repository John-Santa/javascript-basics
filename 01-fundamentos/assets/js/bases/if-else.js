let flag = 4;

if (flag === 5) {
  console.log("flag is 5");
} else {
    console.log("flag is not 5");
}

console.log("end of if-else");


//
const today = new Date();
const day = today.getDay();
console.log({day});

if (day === 0) {
  console.log("Today is Sunday");
}else if (day === 1) {
  console.log("Today is Monday");
} else if (day === 2) {
    console.log("Today is Tuesday");
} else if (day === 3) {
    console.log("Today is Wednesday");
} else if (day === 4) {
    console.log("Today is Thursday");
} else if (day === 5) {
    console.log("Today is Friday");
} else if (day === 6) {
    console.log("Today is Saturday");
} else {
    console.log("Invalid day");
}